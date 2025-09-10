'use client'
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const boxStyle: any = {
    backgroundColor: 'white',
    width: '400px',
    height: '200px',
    boxShadow: '0 0 2px',
    textAlign: 'center',
    borderRadius: '4px',
    padding: '5px'
};


const PreviewScoreComponent = () => {

    let filterValues: any = {
        "lookups": {
            "providers": [
                {
                    "Id": -1,
                    "Text": "Please select...",
                    "Code": "-1",
                    "IsDefault": false,
                    "Attributes": null
                }
            ],
            "reporting_periods": [
                {
                    "Id": 0,
                    "Text": "",
                    "Code": "2020",
                    "IsDefault": false,
                    "Attributes": {
                        "code": "2020",
                        "selected": false
                    }
                },
                {
                    "Id": 0,
                    "Text": "",
                    "Code": "2021",
                    "IsDefault": false,
                    "Attributes": {
                        "code": "2021",
                        "selected": false
                    }
                },
                {
                    "Id": 0,
                    "Text": "",
                    "Code": "2022",
                    "IsDefault": false,
                    "Attributes": {
                        "code": "2022",
                        "selected": false
                    }
                },
                {
                    "Id": 0,
                    "Text": "",
                    "Code": "2023",
                    "IsDefault": false,
                    "Attributes": {
                        "code": "2023",
                        "selected": false
                    }
                },
                {
                    "Id": 0,
                    "Text": "",
                    "Code": "2024",
                    "IsDefault": false,
                    "Attributes": {
                        "code": "2024",
                        "selected": true
                    }
                },
                {
                    "Id": 0,
                    "Text": "",
                    "Code": "2025",
                    "IsDefault": false,
                    "Attributes": {
                        "code": "2025",
                        "selected": false
                    }
                }
            ],
            "tax_ids": [
                {
                    "Id": 0,
                    "Text": "202405131",
                    "Code": "202405131",
                    "IsDefault": false,
                    "Attributes": null
                }
            ],
            "programs": [
                {
                    "Text": "MIPS Individual",
                    "Code": "individual",
                },
                {
                    "Text": "MIPS Group",
                    "Code": "group",
                },
                {
                    "Text": "PCF",
                    "Code": "pcf",
                }
            ]
        },
    };

    let listValue: any = {
        "items": [
            {
                "category": "Quality",
                "performance": "0",
                "weightage": "30%",
                "score": "0"
            },
            {
                "category": "IA",
                "performance": "20.00",
                "weightage": "15%",
                "score": "7.50"
            },
            {
                "category": "PI",
                "performance": "0",
                "weightage": "0%",
                "score": "0"
            }
        ]
    };

    const initLookup = () => {
        let result: any = filterValues.lookups
        setLookup(result);
    }

    let defaultFilterModal: any = {
        reportingPeriods: '2025',
        taxids: '202405131',
        MIPSProgram: 'MIPS Group'
    };
    const [filterModal, setFilterModal] = useState(defaultFilterModal);

    let defaultLookup: any = {};
    const [lookup, setLookup] = useState(defaultLookup);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        handleFilterChange({ [name]: value });
    };
    const handleFilterChange = (data: any) => {
        setFilterModal((prevData: any) => {
            return { ...prevData, ...data }
        })
    }

    let setDefaultisValues: any = {
        smallPractice: null,
        HPSA: null,
        rural: null,
        weight: null,
        reportingPeriods: ""
    }
    const [isValue, setisValue] = useState(setDefaultisValues);

    const handleisValue = (data: any) => {
        setisValue((prevState: any) => {
            return { ...prevState, ...data };
        })
    }
    const handleisvalueChange = (event: any) => {
        const { name, checked } = event.target;
        console.log(checked, ":checked");
        handleisValue({ [name]: checked })
    }
   
    const chartSample = ({
        chart: {
            plotBackgroundColor: '',
            plotShadow: false,
            height: '120px'
        },
        title: {
            text: '8/45',
            align: 'center',
            y: 70,
            style: {
                fontSize: '1.4em'
            }
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                startAngle: -120,
                endAngle: 120,
                center: ['50%', '25%'],
                size: '150px'
            }
        },
        colors: ['#5d9cec', '#D1EAF0'],
        series: [{
            type: 'pie',
            innerSize: '60%',
            data: [
                [8],
                [45]
            ]
        }],
        credits: {
            enabled: false
        }
    });

    const chartSample1 = ({
        chart: {
            plotBackgroundColor: '',
            plotShadow: false,
            height: '120px'
        },
        title: {
            text: '0/0',
            align: 'center',
            y: 70,
            style: {
                fontSize: '1.4em'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                startAngle: -120,
                endAngle: 120,
                center: ['50%', '25%'],
                size: '150px'
            }
        },
        colors: ['#5d9cec', '#D1EAF0'],
        series: [{
            type: 'pie',
            innerSize: '60%',
            data: [
                [0],
                [1]
            ]
        }],
        credits: {
            enabled: false
        }
    });

    const chartSample2 = ({
        chart: {
            plotBackgroundColor: '',
            plotShadow: false,
            height: '120px'
        },
        title: {
            text: '8/15',
            align: 'center',
            y: 70,
            style: {
                fontSize: '1.4em'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                startAngle: -120,
                endAngle: 120,
                center: ['50%', '25%'],
                size: '150px'
            }
        },
        colors: ['#5d9cec', '#D1EAF0'],
        series: [{
            type: 'pie',
            innerSize: '60%',
            data: [
                [8],
                [15]
            ]
        }],
        credits: {
            enabled: false
        }
    });

    const chartSample3 = ({
        chart: {
            plotBackgroundColor: '',
            plotShadow: false,
            height: '120px'
        },
        title: {
            text: '0/0',
            align: 'center',
            y: 70,
            style: {
                fontSize: '1.4em'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                startAngle: -120,
                endAngle: 120,
                center: ['50%', '25%'],
                size: '150px'
            }
        },
        colors: ['#5d9cec', '#D1EAF0'],
        series: [{
            type: 'pie',
            innerSize: '60%',
            data: [
                [0],
                [1]
            ]
        }],
        credits: {
            enabled: false
        }
    });
    useEffect(() => {
        initLookup();
    }, [])

    return (

        <Box className="p-3">
            <Grid container spacing={2} >
                <Grid  sx={{ width: '24%' }}>
                    <FormControl fullWidth size="small">
                        <InputLabel>Performance Period</InputLabel>
                        <Select
                            label='Performance Period'
                            name="reportingPeriods"
                            value={filterModal.reportingPeriods}
                            onChange={handleInputChange}
                            fullWidth
                        >
                            {lookup.reporting_periods?.map((reporting_periods: any) => (
                                <MenuItem key={reporting_periods.Id} value={reporting_periods.Code}>
                                    {reporting_periods.Code}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid  sx={{ width: '24%' }}>
                    <FormControl fullWidth size="small">
                        <InputLabel >TIN</InputLabel>
                        <Select
                            label='TIN'
                            name='taxids'
                            value={filterModal.taxids}
                            onChange={handleInputChange}
                            fullWidth
                        >
                            {lookup.tax_ids?.map((taxId: any) => (
                                <MenuItem key={taxId.Code} value={taxId.Code}>
                                    {taxId.Text}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid  sx={{ width: '24%' }}>
                    <FormControl fullWidth size="small">
                        <InputLabel >NPI</InputLabel>
                        <Select
                            label='NPI'
                            name='npi'
                            value={filterModal.NPI}
                            onChange={handleInputChange}
                            fullWidth
                            size="small"
                        />
                    </FormControl>
                </Grid>
                <Grid sx={{ width: '24%' }}>
                    <FormControl fullWidth size="small">
                        <InputLabel >MIPS Program</InputLabel>
                        <Select
                            label="MIPS Program"
                            name="MIPSProgram"
                            value={filterModal.MIPSProgram}
                            onChange={handleInputChange}
                            fullWidth
                            size="small"
                        >
                            {lookup.programs?.map((programs: any) => (
                                <MenuItem key={programs.Id} value={programs.Text}>
                                    {programs.Text}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Box sx={{ paddingTop: '30px' }}>
                <Typography sx={{ color: '#191970', fontSize: '14px', fontWeight: 'bold' }}>Special Status</Typography>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <FormControlLabel
                        control={<Checkbox name='smallPractice' checked={isValue.smallPractice} onChange={handleisvalueChange} size="small" />} label='Small Practice' />
                    <FormControlLabel
                        control={<Checkbox name='HPSA' checked={isValue.HPSA} onChange={handleisvalueChange} size="small" />} label='HPSA (IA)' />
                    <FormControlLabel
                        control={<Checkbox name='rural' checked={isValue.rural} onChange={handleisvalueChange} size="small" />} label='Rural (IA)' />
                    <FormControlLabel
                        control={<Checkbox name='weight' checked={isValue.weight} onChange={handleisvalueChange} size="small" />} label='Auto PI reweight (PI)' />
                    <Box sx={{ ml: 'auto' }}>
                        <Button size="small" variant="contained" >
                            Get Score Preview
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '15px', paddingTop: '15px', color: '#191970', fontSize: '14px' }}>
                <Typography sx={{ fontSize: '14px' }}> Reporting period:</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>{filterModal.reportingPeriods}</Typography>|
                <Typography sx={{ fontSize: '14px' }}> TIN:   </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>{filterModal.taxids}</Typography>|
                <Typography sx={{ fontSize: '14px' }}> MIPS Program:</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>{filterModal.MIPSProgram}</Typography>|
                <Typography sx={{ fontSize: '14px' }}> Mode:   </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Preview</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingTop: '30px', gap: '40px' }}>
                <Box sx={boxStyle}>
                    <Typography sx={{ color: '#191970' }}>Estimated MIPS Score</Typography>
                    <Box sx={{ paddingTop: '10px' }}>
                        <HighchartsReact options={chartSample} highcharts={Highcharts} />
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ backgroundColor: '#5d9cec' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', color: 'white', gap: '10px' }}>
                            <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'center', width: '200px' }} title="Category">Category</Box>
                            <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'right', width: '200px', paddingRight: 1 }} title="Performance">Performance</Box>
                            <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'right', width: '200px', paddingRight: 1 }} title="Weightage">Weightage</Box>
                            <Box sx={{ width: '200px', textAlign: 'right', paddingRight: 1 }} title="MIPS Score">MIPS Score</Box>
                        </Box>
                    </Box>
                    <Box>
                        {listValue && listValue.items.length > 0 && listValue.items.map((item: any, index: any) => (
                            <Box key={index} sx={{ display: 'flex', flexDirection: 'row', gap: '10px', color: 'white', borderLeft: '1px solid gainsboro', backgroundColor: 'white', borderBottom: '1px solid gainsboro', fontSize: '14px' }}>
                                <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'center', width: '200px', color: '#191970' }}>
                                    {item.category}
                                </Box>
                                <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'right', width: '200px', color: '#191970', paddingRight: 1 }}>
                                    {item.performance}
                                </Box>
                                <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'right', width: '200px', color: '#191970', paddingRight: 1 }}>
                                    {item.weightage}
                                </Box>
                                <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'right', width: '200px', color: '#191970', paddingRight: 1 }}>
                                    {item.score}
                                </Box>
                            </Box>
                        ))}
                        <Box sx={{ display: 'flex', gap: '10px', color: 'white', borderLeft: '1px solid gainsboro', backgroundColor: 'white', borderBottom: '1px solid gainsboro', fontSize: '14px' }}>
                            <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'right', width: '410px', color: '#191970', paddingRight: 1 }}>Estimated MIPS Score</Box>
                            <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'right', width: '200px', color: '#191970', paddingRight: 1, flexDirection: 'column' }}>45%</Box>
                            <Box sx={{ borderRight: '1px solid gainsboro', textAlign: 'right', width: '200px', color: '#191970', paddingRight: 1, flexDirection: 'column' }}>7.50</Box>
                        </Box>
                    </Box>
                    <Box sx={{ paddingTop: '50px' }}>
                        <Box sx={{ fontSize: '14px', color: '#191970', textAlign: 'center', wordBreak: 2 }}>Disclaimer : Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.</Box>
                        <Box sx={{ textAlign: 'center', fontSize: '14px', color: '#191970' }}>This is not your final score.</Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', paddingTop: '20px', gap: '30px' }}>
                <Box sx={boxStyle}>
                    <Typography sx={{ color: '#191970' }}>Quality</Typography>
                    <Box sx={{ paddingTop: '10px' }}>
                        <HighchartsReact options={chartSample1} highcharts={Highcharts} />
                    </Box>
                    <Box>
                        <Button size="small" variant="contained" >
                            See More
                        </Button>
                    </Box>
                </Box>
                <Box sx={boxStyle}>
                    <Typography sx={{ color: '#191970' }}>Improvement Activities</Typography>
                    <Box sx={{ paddingTop: '10px' }}>
                        <HighchartsReact options={chartSample2} highcharts={Highcharts} />
                    </Box>
                    <Box>
                        <Button size="small" variant="contained" >
                            See More
                        </Button>
                    </Box>
                </Box>
                <Box sx={boxStyle}>
                    <Typography sx={{ color: '#191970' }}>Promoting Interoperability</Typography>
                    <Box sx={{ paddingTop: '10px' }}>
                        <HighchartsReact options={chartSample3} highcharts={Highcharts} />
                    </Box>
                    <Button size="small" variant="contained" >
                        See More
                    </Button>
                </Box>
            </Box>
        </Box>

    )
}
export default PreviewScoreComponent;