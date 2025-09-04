import React, { ButtonHTMLAttributes, FC } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = props => {
	const { className, children, theme, ...otherProps } = props
	return (
		<button
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
