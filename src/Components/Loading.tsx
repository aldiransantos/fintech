import React from 'react';

const loadingStyle: React.CSSProperties = {
	width: 'var(--gap)',
	height: 'var(--gap)',
	border: 'var(--gap-s) solid var(--color-3)',
	borderRightColor: 'var(--color-4)',
	borderRadius: '50%',
	animation: 'spin 1s infinite',
};

const Loading = () => {
	return (
		<div style={loadingStyle}>
			<style>
				{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        `}
			</style>
		</div>
	);
};

export default Loading;
