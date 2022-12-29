import React from 'react'
import Header from '../../components/header/Header';
import Tasks from '../../components/tasks/Tasks';
import styles from './MainPage.module.css'

const MainPage = () => {
    return (
        <div>
            <Header />
            <Tasks />
        </div>
    );
};
export default MainPage