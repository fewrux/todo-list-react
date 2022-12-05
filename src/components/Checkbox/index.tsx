import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { FormEventHandler } from 'react';
import styles from './styles.module.css'

interface CheckboxProps {
  onClick: () => void;
}

export function Checkbox({ onClick }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root onClick={onClick} className={styles.checkbox}>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className={styles.check} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
