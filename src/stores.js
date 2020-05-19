import {
  writable,
  derived
} from 'svelte/store'

export const weaponSkill = writable(0)
export const ballisticSkill = writable(0)
export const strength = writable(0)
export const toughness = writable(0)
export const agility = writable(0)
export const intelligence = writable(0)
export const willPower = writable(0)
export const fellowship = writable(0)

// attacks: '',
// wounds: '',
// strengthBonus: '',
export const toughnessBonus = derived(toughness, $toughness => $toughness > 9 ? Math.floor($toughness / 10) : 0)
// movement: '',
// magic: '',
// insanityPoints: '',
// fatePoints: ''
