'use client'
import { Box, IconButton, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from "next/navigation";


const AdminLayout = ({ children }: { children: React.ReactNode }) => {
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
                    height: "60px",
                    backgroundColor: "#D4D4D4",
                }}
            >
                <Typography>Admin Portal</Typography>
            </Box>
            <Box sx={{ display: 'flex', flex: 1 }}>
                <Box sx={{ width: '15%', height: 'auto', backgroundColor: 'Background', padding: '20px', boxShadow: '0 0 1px' }}>
                    <IconButton onClick={navBack}>
                        < LogoutIcon />
                    </IconButton>
                </Box>
                <Box sx={{ padding: '20px' }}>
                    {children}
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px",
                backgroundColor: "#D4D4D4",
            }}>© 2016-2025 - UnisLink</Box>
        </Box>
    );
};

export default AdminLayout;

