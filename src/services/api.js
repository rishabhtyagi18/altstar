import {
    get,
    post,
    put,
    patch,
    deleteApi,
    getfile,
} from "./apiMethods.js";

export const sendOtp = async (payload) => {
	const res = await post(`api/v1/altstar/send_otp`, payload);
	return res;
};

export const verifyOtp = async (payload) => {
	const res = await post(`api/v1/altstar/verify_login`, payload);
	return res;
};

export const createProfile = async (payload) => {
	const res = await post(`api/uprofile/v1/userprofile`, payload);
	return res;
};

export const rateBuilder = async (payload) => {
	const res = await post(`api/builder/v1/review`, payload);
	return res;
};

export const searchBuilder = async (payload, bookmark) => {
	const url  = bookmark ? 'api/builder/v1/bookmarked_builders?' : 'api/builder/v1/builders?';
	const res = await get(url, payload);
	return res;
};

export const editBuilder = async (payload) => {
	const res = await post(`api/builder/v1/builder`, payload);
	return res;
};

export const builderDetails = async (payload) => {
	const res = await get(`api/builder/v1/builder?object_id=`, payload);
	return res;
};

export const getBuilderReviews = async (payload) => {
	const res = await get(`api/builder/v1/reviews?`, payload);
	return res;
};

export const reportIssue = async (payload) => {
	const res = await post(`api/builder/v1/report_review_issue`, payload);
	return res;
};

export const bookmarkBuilder = async (payload) => {
	const res = await post(`api/builder/v1/bookmark`, payload);
	return res;
};

export const likeReviews = async (payload) => {
	const res = await post(`api/builder/v1/review_like`, payload);
	return res;
};

export const builderQuery = async (payload) => {
	const res = await post(`api/builder/v1/query`, payload);
	return res;
};