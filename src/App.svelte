<script>
    import NumberInput from './components/NumberInput.svelte'
    import Input from './components/Input.svelte'

    let selectedRace

    import {
        weaponSkill,
        ballisticSkill,
        strength,
        toughness,
        agility,
        intelligence,
        willPower,
        fellowship,
        attacks,
        wounds,
        toughnessBonus,
        strengthBonus,
        movement,
        magic,
        insanityPoints,
        fatePoints,
        races,
    } from './stores.js'
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
                <NumberInput fieldName={'weaponSkill'} label={'HA'} bind:fieldValue={$weaponSkill} />
                <NumberInput fieldName={'ballisticSkill'} label={'HP'} bind:fieldValue={$ballisticSkill} />
                <NumberInput fieldName={'strength'} label={'F'} bind:fieldValue={$strength} />
                <NumberInput fieldName={'toughness'} label={'R'} bind:fieldValue={$toughness} />
                <NumberInput fieldName={'agility'} label={'Ag'} bind:fieldValue={$agility} />
                <NumberInput fieldName={'intelligence'} label={'I'} bind:fieldValue={$intelligence} />
                <NumberInput fieldName={'willPower'} label={'V'} bind:fieldValue={$willPower} />
                <NumberInput fieldName={'fellowship'} label={'Em'} bind:fieldValue={$fellowship} />
            </fielset>
        </fielset>

        <fielset>
            <legend>Secundarias</legend>
            <NumberInput fieldName={'attacks'} label={'A'} fieldValue={$attacks} />
            <NumberInput fieldName={'wounds'} label={'H'} fieldValue={$wounds} />
            <NumberInput fieldName={'strengthBonus'} label={'BF'} fieldValue={$strengthBonus} />
            <NumberInput fieldName={'toughnessBonus'} label={'BR'} fieldValue={$toughnessBonus} />
            <NumberInput fieldName={'movement'} label={'M'} fieldValue={$movement} />
            <NumberInput fieldName={'magic'} label={'Mag'} fieldValue={$magic} />
            <NumberInput fieldName={'instanityPoints'} label={'PL'} fieldValue={$insanityPoints} />
            <NumberInput fieldName={'fatePoints'} label={'PD'} fieldValue={$fatePoints} />
        </fielset>
    </fieldset>
</main>
