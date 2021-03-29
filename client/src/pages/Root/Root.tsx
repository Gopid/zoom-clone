import React from 'react';
import { Redirect } from 'react-router-dom';
import routes from 'routes';

const Root: React.FunctionComponent = () => <Redirect to={routes.JOIN} />;

export default Root;
