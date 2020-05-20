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

export const attacks = writable(0)
export const wounds = writable(0)
export const strengthBonus = derived(strength, $strength => $strength > 9 ? Math.floor($strength / 10) : 0)
export const toughnessBonus = derived(toughness, $toughness => $toughness > 9 ? Math.floor($toughness / 10) : 0)
export const movement = writable(0)
export const magic = writable(0)
export const insanityPoints = writable(0)
export const fatePoints = writable(0)

export const races = [
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
  }
]
