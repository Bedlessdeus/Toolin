const getMod = async (mod_path) => {
    if(!(mod_path.endsWith(".emod") || mod_path.endsWith(".mod"))) return getError();
    let fe = await fetch(mod_path);
    if(fe.ok) {
        return fe.text();
    } else {
        return getError();
    }
}

const getError = async () => {
    let fe = await fetch('/modules/error.mod')
    if(fe.ok) {
        return fe.text()
    } else {
        return '<div><h1>404</h1><h2>No error Page setup, please add an error.mod</h2></div>'
    }
}

const wipeScripts = () => {
    const script = document.querySelector('.loaded-script');
    if (script) {
        script.remove();
    }
}

const handleMod = (url, content) => {
    if(!url.endsWith(".mod")) return;
        document.querySelector('.main-content').innerHTML = content;
        document.querySelectorAll('module-script').forEach(script => {
                const newScript = document.createElement('script');
                newScript.innerHTML = script.innerText;
                newScript.className = 'loaded-script'
                document.body.appendChild(newScript);
            });
}

const handleEMod = async (url, content) => {
    if(!url.endsWith(".emod")) return;
    let item = document.createElement('script');
    document.querySelector('.main-content').innerHTML = await getMod("/modules/base.mod")
    item.className = 'loaded-script'
    item.textContent = 
    "document.querySelector('form').oninput = (e) => {\n" +
    "   let input = document.querySelector('input[name=\"input\"]').value;\n" +
    "   let output;\n" + content + "\n" +
    "   document.querySelector('input[name=\"output\"]').value = output;\n" +
    "};\n"
    document.body.appendChild(item)
}

const loadMod = async () => {
    let fe = await fetch('/modules/index.json')
    if(!fe.ok) {
        console.error('Error fetching modules: ', error);
        return;
    }

    const sidebar = document.getElementById('sidebar')
    let jso = await fe.json();
    jso["modules"].forEach(module => {
        const link = document.createElement('button');
        link.innerText = module.name;
        link.onclick = async () => {
            wipeScripts()
            let mod = await getMod('/modules/' + module.url)
            handleMod(module.url, mod)
            handleEMod(module.url, mod)
        };
        sidebar.appendChild(link);
    });
}

loadMod();

/*document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
};*/