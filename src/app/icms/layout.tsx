'use client'
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/components/ThemeProvider';

const ICMSLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [isSideBar, setisSideBar] = useState(false);

    const handlesideBar = () => {
        setisSideBar((prev: any) => !prev);
    };

    const navBack = () => {
        router.push("/")
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '90%',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: '60px',
                    backgroundColor: "whiteSmoke",
                    boxShadow: "15px solid black",
                    padding: '0 16px',
                    width: '100%',
                }}
            >
                <MenuIcon sx={{ color: '#5d9cec', cursor: 'pointer', ml: 25 }} onClick={handlesideBar} />
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ fontSize: '25px', color: '#191970' }}>
                        acPopulationHealth
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flex: 1, flexDirection: 'row', overflowX: 'auto' }}>
                <Box
                    sx={{
                        width: isSideBar ? '5%' : '15%',
                        backgroundColor: 'Background',
                        padding: '20px',
                        boxShadow: '0 0 1px',
                        height: 'calc(100vh - 90px)',
                        boxSizing: 'border-box',
                        transition: 'width 0.3s ease',
                    }}
                >
                    {!isSideBar &&
                        <Typography sx={{ color: '#515253', whiteSpace: 'nowrap', fontSize: '14px' }}>
                            Preview Score Dashboard
                        </Typography>
                    }
                </Box>

                <Box sx={{ flex: 1, overflow: 'auto' }}>
                    <Box
                        sx={{
                            display: "flex",
                            paddingLeft: '10px',
                            alignItems: "center",
                            height: '30px',
                            width: '100%',
                            backgroundColor: "#5d9cec",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Typography sx={{ fontSize: '18px', color: 'white' }}>
                            MIPS Preview Score Dashboard
                        </Typography>
                    </Box>

                    <Box sx={{
                        padding: '10px', overflowY: 'auto', maxHeight: 'calc(100vh - 99px)'
                    }}>
                        <ThemeProvider theme={theme}>
                            {children}
                        </ThemeProvider>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#5d9cec",
                    height: '30px',
                    marginLeft: { xs: 0, sm: isSideBar ? '5%' : '15%' },
                    padding: '0 16px',
                    width: '100%',
                }}
            >
                <Typography sx={{
                    color: 'white', fontSize: '14px', mr: 30
                }}>
                    © 2016-2025 - AmazingCharts
                </Typography>
            </Box>
        </Box>
    );
};

export default ICMSLayout;

