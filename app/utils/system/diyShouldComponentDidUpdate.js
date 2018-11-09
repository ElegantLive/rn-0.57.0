export default defaultUpdate = (newProps,newState,object) => {
    // console.log(
        // 'rendering',
        // 'newProps',
        // newProps,
        // 'newState',
        // newState,
        // 'this.props',
        // object.props,
        // 'this.state',
        // object.state,
        // (newProps.name !== object.props.name),
        // (newState !== object.state)
    // );
    const propsCheck = (newProps.name !== object.props.name);
    const stateCheck = (newState !== object.state);

    if (propsCheck || stateCheck) {
        if (!stateCheck) newState.name = newProps.name;

        return true;
    }

    return false;
}