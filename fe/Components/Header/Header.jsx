'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import RegisterMenu from './RegisterMenu';
import { useAuth } from '@/contexts/Auth.context';
import { useRouter } from 'next/navigation';

const Logo = styled('img')({
	width: '64px',
	height: '64px',
});

function Header() {
	const [AnchorHeader, setAnchorHeader] = React.useState(null);
	const { logout, token } = useAuth();
	const { push } = useRouter();
	const handleOpenNavMenu = event => {
		setAnchorHeader(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorHeader(null);
	};

	const handleLogout = () => {
		setTimeout(() => {
			logout();
			push('/');
		}, 2000);
	};

	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: colors.background,
				borderBottom: '2px solid',
				borderColor: colors.border,
			}}
		>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Button
						draggable='false'
						variant='text'
						title='Volver al inicio'
						sx={{ display: { xs: 'none', md: 'flex' } }}
					>
						<Logo draggable='false' src='https://img.icons8.com/clouds/100/caduceus.png' />
						<Typography
							variant='h6'
							noWrap
							component='a'
							href='/'
							sx={{
								mr: 13,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.8rem',
								color: colors.text,
								textDecoration: 'none',
							}}
							draggable='false'
						>
							Klinika
						</Typography>
					</Button>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton size='large' onClick={handleOpenNavMenu} color={colors.text}>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={AnchorHeader}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(AnchorHeader)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
							disableScrollLock={'false'}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Link href='/'>Homes</Link>
							</MenuItem>

							<MenuItem onClick={handleCloseNavMenu}>
								<Link href='/'>Our Services</Link>
							</MenuItem>

							<MenuItem onClick={handleCloseNavMenu}>
								<Link href='/doctors'>Doctors</Link>
							</MenuItem>

							<MenuItem onClick={handleCloseNavMenu}>
								<Link href='/'>About</Link>
							</MenuItem>
						</Menu>
					</Box>

					<Typography
						noWrap
						component='a'
						href='/'
						sx={{
							ml: 1,
							mr: 1,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 'bold',
							color: colors.text,
							textDecoration: 'none',
							fontSize: '23px',
						}}
					>
						Klinika
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '30px' }}>
						<Link
							draggable='false'
							href='/'
							style={{
								fontSize: '1.2rem',
								color: colors.text,
								textTransform: 'none',
								fontWeight: '600',
							}}
						>
							Home
						</Link>
						<Link
							draggable='false'
							href='/'
							style={{
								fontSize: '1.2rem',
								color: colors.text,
								textTransform: 'none',
								fontWeight: '600',
							}}
						>
							Our Services
						</Link>
						<Link
							draggable='false'
							href='/doctors'
							style={{
								fontSize: '1.2rem',
								color: colors.text,
								textTransform: 'none',
								fontWeight: '600',
							}}
						>
							Doctors
						</Link>
						<Link
							draggable='false'
							href='/'
							style={{
								fontSize: '1.2rem',
								color: colors.text,
								textTransform: 'none',
								fontWeight: '600',
							}}
						>
							About
						</Link>
					</Box>

					<Box sx={{ flexGrow: 0, display: 'flex', gap: '30px', alignItems: 'center' }}>
						{token ? (
							<Button
								draggable='false'
								style={{
									fontSize: '1.2rem',
									color: colors.text,
									textTransform: 'none',
									fontWeight: '500',
								}}
								onClick={handleLogout}
							>
								Logout
							</Button>
						) : (
							<>
								<RegisterMenu />

								<Link
									draggable='false'
									href='../../sign-in'
									style={{
										fontSize: '1.2rem',
										color: colors.text,
										textTransform: 'none',
										fontWeight: '500',
									}}
								>
									Login
								</Link>
							</>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Header;
