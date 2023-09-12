import React from 'react';
import Navbar from '../components/Navbar';
import { Description } from '../components/HeroesDescription';
import { DataTable } from '../components/HeroesList';

export default function HeroesPage() {
    return (
        <div>
            <Navbar></Navbar>
            <Description></Description>
            <DataTable></DataTable>
        </div>
    )
}