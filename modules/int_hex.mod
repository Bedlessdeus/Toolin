<module-script>
    document.querySelector('form').oninput = (e) => {
        let input = document.querySelector('input[name="input"]').value;
        let binary = input.toString(16).padStart(4, '0');
        document.querySelector('input[name="output"]').value = binary;
    };
</module-script>

<div>
    <h1>Integer to Hex</h1>
    <h2>Convert an integer to hexadecimal</h2>
    <form>
        <div class="form-left">
            <label for="input"><b>Input</b></label>
            <input type="number" name="input" placeholder="Enter an integer" />
        </div>
        <div class="form-right">
            <label for="output"><b>Output</b></label>
            <input type="text" name="output" placeholder="Hexadecimal" disabled />
        </div>
    </form>
</div>