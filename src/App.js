import React from 'react';
import { FaqsContainer } from './containers/faqs';
import { FooterContainter } from './containers/footer';
import {JumbotronContainer} from './containers/jumbotron';

export default function App() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainter />
        </>
    )
}