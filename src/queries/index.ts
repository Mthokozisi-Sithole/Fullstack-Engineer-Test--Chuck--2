import { gql } from 'apollo-boost';

export const getCategories = gql`
	{
		getJokesCategories
	}
`;

export const getJoke = gql`
	query($category: String!) {
		getJoke(category: $category) {
			value
			created_at
			icon_url
			updated_at
			url
		}
	}
`;

