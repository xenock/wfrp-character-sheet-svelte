<script>
    import Input from './components/Input.svelte'
    const races = [
        {
            id: 1,
            text: 'Elfo'
        },
        {
            id: 2,
            text: 'Enano'
        },
        {
            id: 3,
            text: 'Halfling'
        },
        {
            id: 4,
            text: 'Humano'
        },
    ]

    let selectedRace


</script>

<main>
    <h1>Warhammer</h1>
    <fieldset>
        <legend>Personaje</legend>

        <Input fieldName={'name'} label={'Nombre'} />

        <label for="race-field">Raza seleccionada: {selectedRace ? selectedRace.text : ''} </label>
        <select id="race-field" name="race" bind:value={selectedRace}>
            {#each races as race}
                <option value={race}>
                    {race.text}
                </option>
            {/each}
        </select>

        <Input fieldName={'actual-career'} label={'Profesión actual'} />

        <Input fieldName={'former-career'} label={'Profesión anterior'} />
    </fieldset>
</main>
