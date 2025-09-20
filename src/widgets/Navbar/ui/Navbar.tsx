import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import * as cls from './Navbar.module.scss'

export interface NavbarProps {
	className?: string
}

const Navbar = (props: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [props.className])}>
			<div className={cls.links}>
				<AppLink to={'/'} className={cls.mainLink}>
					Главная страница
				</AppLink>
				<AppLink to={'/about'}>О сайте</AppLink>
			</div>
		</div>
	)
}
export default Navbar
