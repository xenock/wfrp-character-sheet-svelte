<script>
  export let fieldName
  export let label
  export let fieldValue
</script>

<label for="{fieldName}-field">{label}</label>
<input id="{fieldName}-field" name={fieldName} type="text" bind:value={fieldValue} />
