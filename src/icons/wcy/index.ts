export { TeckStackMagV0, TeckStackMagV1, TeckStackV2, TeckStackV4 } from '../stacks'
import GitHub from '../stacks/GitHub.vue'
import VSCode from '../stacks/VSCode.vue'
import type { Component } from 'vue'
import Apple from './Apple.vue'
import Starbucks from './Starbucks.vue'
import KFC from './KFC.vue'
import Clash from './Clash.vue'
import macOS from './macOS.vue'
import Rust from '../stacks/Rust.vue'
import PyTorch from '../stacks/PyTorch.vue'
import LaTeX from '../stacks/LaTeX.vue'

export const PersonalPreferences: Array<{ icon: Component; name: string; classify: string }> = [
  { icon: Clash, name: 'Clash', classify: 'tool' },
  { icon: GitHub, name: 'GitHub', classify: 'git' },
  { icon: VSCode, name: 'VSCode', classify: 'dev-tool' },
  { icon: Rust, name: 'Rust', classify: 'language' },
  { icon: PyTorch, name: 'PyTorch', classify: 'framework' },
  { icon: LaTeX, name: 'LaTeX', classify: 'language' },
  { icon: Apple, name: 'Apple', classify: 'brand' },
  { icon: Starbucks, name: 'Starbucks', classify: 'brand' },
  { icon: KFC, name: 'KFC', classify: 'brand' },
  { icon: macOS, name: 'macOS', classify: 'os' }
]
