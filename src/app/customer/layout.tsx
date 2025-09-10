'use client'
import { Box, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const navBack = () => {
        router.push("/")
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: '60px',
                    backgroundColor: "#339aa9",
                    boxShadow: "0 0 10px solid black",
                }}
            >
                <Typography>Client Portal</Typography>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
                <Box sx={{ padding: '20px' }}>
                    {children}
                </Box>
                <Box sx={{ width: '15%', height: 'auto', backgroundColor: 'Background', padding: '20px', boxShadow: '0 0 1px', ml: 'auto' }}>
                    <IconButton onClick={navBack}>
                        < LogoutIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "30px",
                    backgroundColor: " #87CEEB",
                }}
            >
                <Typography>© 2016-2025 - UnisLink</Typography>
            </Box>
        </Box>
    );
};

export default CustomerLayout;

