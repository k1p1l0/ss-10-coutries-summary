var Description = ( () => {

	function Description () {
		this.parameters = {};

		return this;
	}

	extend(BaseModel, Description);

	return Description;
})();