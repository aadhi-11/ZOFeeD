import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Tables = () => {
    const rows = [
        {
            id: 1143155,
            product: "Chicken KuzhiMandhi",
            img: "https://content.jdmagicbox.com/comp/thrissur/k8/9999px487.x487.190824221830.q2k8/catalogue/nahdi-kuzhimandhi-kokkalai-thrissur-restaurants-0ayrb49amt.jpg?clr=",
            customer: "John smith",
            Shop: "Al-Reem",
            Delivery_boy: "Amal Thahseen",
            date: '1 March',
            amount: 680,
            method: "Cash On Delivery",
            status: "Approved"
        },
        {
            id: 1143156,
            product: "Chicken Biriyani",
            img: "https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800",
            customer: "Midhun Santhosh",
            Shop: "Unnis Restuarent",
            Delivery_boy: "Adhith",
            date: '2 March',
            amount: 120,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id: 1143157,
            product: "Veg Noodles",
            img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles.jpg",
            customer: "Sreyas Prasanth",
            Shop: "SreeBhadra Restuarent",
            Delivery_boy: "Navaneeth",
            date: '2 March',
            amount: 110,
            method: "Online Payment",
            status: "Picked "
        },
        {
            id: 1143159,
            product: "Veg Noodles",
            img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles.jpg",
            customer: "Sreyas Prasanth",
            Shop: "SreeBhadra Restuarent",
            Delivery_boy: "Navaneeth",
            date: '2 March',
            amount: 110,
            method: "Online Payment",
            status: "Picked "
        }
    ];
    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Tracking ID</TableCell>
                        <TableCell className='tableCell'>Item</TableCell>
                        <TableCell className='tableCell'>Customer</TableCell>
                        <TableCell className='tableCell'>Shop</TableCell>
                        <TableCell className='tableCell'>DB</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Payment Method</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((rows) => (
                        <TableRow key={rows.id}>
                            <TableCell className='tableCell' >{rows.id}</TableCell>
                            <TableCell >
                                <div className="cellwrapper tableCell">
                                    <img src={rows.img} alt="" className="image" />
                                    {rows.product}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell' >{rows.customer}</TableCell>
                            <TableCell className='tableCell'>{rows.Shop}</TableCell>
                            <TableCell className='tableCell'>{rows.Delivery_boy}</TableCell>
                            <TableCell className='tableCell'>{rows.date}</TableCell>
                            <TableCell className='tableCell'>{rows.amount}</TableCell>
                            <TableCell className='tableCell'>{rows.method}</TableCell>
                            <TableCell className='tableCell'>
                               <span className={`status ${rows.status} `}>{rows.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tables
