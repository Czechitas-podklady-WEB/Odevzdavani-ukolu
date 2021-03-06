import {
	AppBar,
	Avatar,
	Badge,
	Container,
	Toolbar,
	Typography,
} from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { useUser } from '../contexts/UserContext'
import s from './Header.module.css'

export const Header: React.FunctionComponent = () => {
	const user = useUser()

	return (
		<AppBar position="static" color="inherit">
			<Container disableGutters>
				<Toolbar>
					<div className={s.main}>
						<Link href="/">
							<a>
								<Typography variant="h5">Odevzdávání úkolů</Typography>
							</a>
						</Link>
					</div>
					{user && user.isStudent && (
						<Avatar src={user.student.avatar || undefined} />
					)}
					{user && user.isAdmin && (
						<Badge
							overlap="circle"
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							badgeContent={<div className={s.adminBadge} />}
							title="Admin"
						>
							<Avatar src={user.admin.avatar || undefined} />
						</Badge>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	)
}
