import axios from 'axios';

export const fetchExp = contestId => {
	return axios.get(`/api/contests/${contestId}`)
		.then(resp=> resp.data);
};

export const fetchExpList = () => {
	return axios.get(`/api/contests`)
		.then(resp=> resp.data.contests);
};