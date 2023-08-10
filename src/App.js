import React, { Component, useState } from 'react'
import Navbar from './mycomponents/Navbar'
import Photos from './mycomponents/Photos';
import News from './mycomponents/News';
import NewsItem from './mycomponents/NewsItem';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App(props) {
    const pageSize = 15

    const [loader, setLoader] = useState(0)

    const updateProgress = (loader) => {
        setLoader(loader)
    }

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <LoadingBar
                        color='#f11946'
                        progress={loader}
                    />
                    <Photos />
                    <Routes>
                        <Route excat path='/' element={<News updateProgress={updateProgress} key="general" setLoader={loader} pageSize={props.pageSize} apiKey={'0e120259e6b5481091238e757729c1a5'} country="in" category="general" />} />
                        <Route excat path='/health' element={<News updateProgress={updateProgress} key="health" pageSize={props.pageSize} apiKey={'0e120259e6b5481091238e757729c1a5'} country="in" category="health" />} />
                        <Route excat path='/science' element={<News updateProgress={updateProgress} key="science" pageSize={props.pageSize} apiKey={'0e120259e6b5481091238e757729c1a5'} country="in" category="science" />} />
                        <Route excat path='/sports' element={<News updateProgress={updateProgress} key="sports" pageSize={props.pageSize} apiKey={'0e120259e6b5481091238e757729c1a5'} country="in" category="sports" />} />
                        <Route excat path='/technology' element={<News updateProgress={updateProgress} key="technology" pageSize={props.pageSize} apiKey={'0e120259e6b5481091238e757729c1a5'} country="in" category="technology" />} />
                        <Route excat path='/entertainment' element={<News updateProgress={updateProgress} key="entertainment" pageSize={props.pageSize} apiKey={'0e120259e6b5481091238e757729c1a5'} country="in" category="entertainment" />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}
