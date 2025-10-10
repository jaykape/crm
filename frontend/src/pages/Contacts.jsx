import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function Contacts() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 40, minWidth: 90 },
        { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
        { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },
        { field: 'phone', headerName: 'Phone', flex: 1, minWidth: 150 },
        { field: 'company', headerName: 'Company', flex: 1, minWidth: 200 },
        { field: 'leadsource', headerName: 'Lead Source', flex: 1, minWidth: 150 },
    ];

    const rows = [
        { id: 1, name: 'Nattapong Srisai', email: 'nattapong.srisai@gmail.com', phone: '081-234-5678', company: 'Srisai Solutions', leadsource: 'Website' },
        { id: 2, name: 'Kanya Phongchai', email: 'kanya.phongchai@hotmail.com', phone: '089-876-5432', company: 'Phongchai Industries', leadsource: 'Referral' },
        { id: 3, name: 'Anucha Charoen', email: 'anucha.charoen@yahoo.com', phone: '086-345-6789', company: 'Charoen Tech', leadsource: 'Email Campaign' },
        { id: 4, name: 'Pimchanok Saetang', email: 'pimchanok.saetang@gmail.com', phone: '082-567-8901', company: 'Saetang Co., Ltd.', leadsource: 'Social Media' },
        { id: 5, name: 'Worachai Kittipong', email: 'worachai.kittipong@hotmail.com', phone: '085-678-9012', company: 'Kittipong Enterprises', leadsource: 'Event' },
        { id: 6, name: 'Suwanna Thongdee', email: 'suwanna.thongdee@gmail.com', phone: '083-456-7890', company: 'Thongdee Group', leadsource: 'Website' },
        { id: 7, name: 'Chaiyaporn Rattanakul', email: 'chaiyaporn.rattanakul@yahoo.com', phone: '087-890-1234', company: 'Rattanakul Solutions', leadsource: 'Referral' },
    ];

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
            <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: 700, fontFamily: 'Arial, sans-serif' }}
            >
                Contacts
            </Typography>
            <Box sx={{ flex: 1 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10, 25, 50]}
                    checkboxSelection
                    disableSelectionOnClick
                    sx={{
                        width: '100%',
                        minWidth: '950px', // ensures horizontal scroll if needed
                    }}
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                    filterMode="client"
                />
            </Box>
        </Box>
    );
}
