<module-script>
    document.querySelector('form').oninput = (e) => {
        let input = document.querySelector('input[name="input"]').value;
        let binary = (input >>> 0).toString(2);
        document.querySelector('input[name="output"]').value = binary;
    };
</module-script>

<div>
    <h1>Integer to Binary</h1>
    <h2>Convert an integer to binary</h2>
    <form>
        <div class="form-left">
            <label for="input"><b>Input</b></label>
            <input type="number" name="input" placeholder="Enter an integer" />
        </div>
        <div class="form-right">
            <label for="output"><b>Output</b></label>
            <input type="text" name="output" placeholder="Binary" disabled />
        </div>
    </form>
</div>