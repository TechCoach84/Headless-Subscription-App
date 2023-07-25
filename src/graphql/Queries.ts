import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
	query {
		products(first: 10) {
			edges {
				node {
					title
					description
				}
			}
		}
	}
`;

export const GET_SMARTPHONES = gql`
	{
		collectionByHandle(handle: "smartphones") {
			products(first: 10) {
				edges {
					node {
						title
						description
						variants(first: 1) {
							edges {
								node {
									price
								}
							}
						}
						images(first: 1) {
							edges {
								node {
									url
								}
							}
						}
					}
				}
			}
		}
	}
`;
