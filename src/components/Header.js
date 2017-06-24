import React from 'react';

const Header = ({Message}) => {
	return (
		<h2 className="Header text-center">{Message}</h2>
	);
};

Header.propTypes = {
	Message: React.PropTypes.string.isRequired
};

export default Header;