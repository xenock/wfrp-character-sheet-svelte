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

    <fieldset>
        <legend>Detalles personales</legend>
    </fieldset>

    <fieldset>
        <legend>Perfil del personaje</legend>

        <fielset>
            <legend>Primarias</legend>

            <fielset>
                <legend>Iniciales</legend>
                <Input fieldName={'weaponSkill'} label={'HA'} />
                <Input fieldName={'ballisticSkill'} label={'HP'} />
                <Input fieldName={'strength'} label={'F'} />
                <Input fieldName={'toughness'} label={'R'} />
                <Input fieldName={'agility'} label={'Ag'} />
                <Input fieldName={'intelligence'} label={'I'} />
                <Input fieldName={'willPower'} label={'V'} />
                <Input fieldName={'fellowship'} label={'Em'} />
            </fielset>
        </fielset>

        <fielset>
            <legend>Secundarias</legend>
            <Input fieldName={'attacks'} label={'A'} />
            <Input fieldName={'wounds'} label={'H'} />
            <Input fieldName={'strengthBonus'} label={'BF'} />
            <Input fieldName={'toughnessBonus'} label={'BR'} />
            <Input fieldName={'movement'} label={'M'} />
            <Input fieldName={'magic'} label={'Mag'} />
            <Input fieldName={'insanityPoints'} label={'PL'} />
            <Input fieldName={'fatePoints'} label={'PD'} />
        </fielset>
    </fieldset>
</main>
