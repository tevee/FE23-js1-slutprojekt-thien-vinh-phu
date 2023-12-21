/**
 * Thien Vinh Phu, 2023
 * (c) CC BY - https://creativecommons.org/licenses/by/4.0/
 * 
 * Movie DataBase
 * Uses themoviedb API - https://developer.themoviedb.org/reference/intro/getting-started
 * 
 * Summary - ongoing
 */

import { searchForm } from "./modules/searchForm.js";
import { moviesDropDown } from "./modules/topTenMoviesByTarget.js";

function testFetch() {

    const BEARER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDFkM2I0ZWZjMTc3Zjg5YzkwNjZlMTk5ZGI5ZmRjNSIsInN1YiI6IjY1ODA5MDY1ODc1ZDFhMDdiYmFlYTk5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GVrIp6HOM5Bj5B_rfph3oD0XBy4X11p3Top9_zZHihQ';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${BEARER_KEY}`
        }
    }

    const url = `https://api.themoviedb.org/3/configuration`;

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

}

testFetch();

searchForm();
moviesDropDown();