import React, { memo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const renderLoading = () => (
	<View>
		<ActivityIndicator color={'white'} size='large' />
	</View>
);

const Loading = (props) => {
	const { loading, isAbsolute } = props;
	const containerStyle = isAbsolute
		? styles.absoluteContainer
		: styles.container;

	if (loading) {
		return (
			<View style={containerStyle}>
				{renderLoading()}
			</View>
		);
	}

	return null;
};

Loading.propTypes = {
	loading: PropTypes.bool,
	isAbsolute: PropTypes.bool
};

Loading.defaultProps = {
	loading: false,
	isAbsolute: false
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	absoluteContainer: {
		flex: 1,
		position: 'absolute',
		backgroundColor: 'rgba(0, 0, 0, .20)',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default memo(Loading);
