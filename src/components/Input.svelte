<script>
    export let fieldName
    export let label
</script>

<label for="{fieldName}-field">{label}</label>
<input id="{fieldName}-field" name={fieldName} type="text" value=""/>
