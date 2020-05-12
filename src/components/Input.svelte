<script>
    export let fieldName
    export let label
    export let fieldType = 'text'
    export let fieldValue = ''
</script>

<label for="{fieldName}-field">{label}</label>
<input id="{fieldName}-field" name={fieldName} type={fieldType} value={fieldValue} />
