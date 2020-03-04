import * as React from 'react';

interface OwnProps {
    error: number;
}

class ErrorMssg extends React.Component<OwnProps, {}> {
    render() {
        const { error } = this.props;
        let mssg = '';

        switch (error) {
            case 404:
                mssg = 'We couldn\'t find that city in that country!';
                break;
            default:
                return mssg;
        }
        
        return(
            <div id="error">
                <h1>
                    Oops! Something went wrong: <br/>
                    {mssg}
                </h1>
            </div>
        );
    }
}

export default ErrorMssg;