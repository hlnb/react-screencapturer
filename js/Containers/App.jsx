//...
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../Actions';

const mapStateToProps = state => ({ states: state });
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch),
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<Main {...this.props} />
			</MuiThemeProvider>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
