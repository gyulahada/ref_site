import React from 'react';
import Navbar from '../components/Navbar';
import { Description } from '../components/HeroesDescription';
import { DataTable } from '../components/DataTable';

export function HeroesPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Description></Description>
            <DataTable></DataTable>
        </div>
    )
}