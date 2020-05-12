<script>
    import Input from './components/Input.svelte'
</script>

<main>
    <h1>Warhammer</h1>
    <fieldset>
        <legend>Personaje</legend>

        <Input fieldName={'name'} label={'Nombre'} />

        <Input fieldName={'race'} label={'Raza'} />

        <Input fieldName={'actual-career'} label={'Profesión actual'} />

        <Input fieldName={'former-career'} label={'Profesión anterior'} />
    </fieldset>
</main>
