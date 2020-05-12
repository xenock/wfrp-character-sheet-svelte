<script>
    import Input from './components/Input.svelte'
</script>

<main>
    <h1>Warhammer</h1>
    <fieldset>
        <legend>Personaje</legend>

        <Input fieldName={'name'} label={'Nombre'} />

        <label for="race-field">Raza</label>
        <input id="race-field" name="race" type="text" value=""/>

        <label for="actual-career-field">Profesión actual</label>
        <input id="actual-career-field" name="actual-career" type="text" value=""/>

        <label for="former-career-field">Profesión anterior</label>
        <input id="former-career-field" name="career-field" type="text" value=""/>
    </fieldset>
</main>
