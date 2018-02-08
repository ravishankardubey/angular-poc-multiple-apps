export const formPostalDetails = `
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
                <fieldset>
                    <legend>Postal Details :</legend>
                    <div class="form-group">
                        <label for="address">Address:</label>
                        <input type="text" class="form-control" id="address">
                    </div>
                    <div class="form-group">
                        <label for="city">City:</label>
                        <input type="text" class="form-control" id="city">
                    </div>
                    <div class="form-group">
                        <label for="state">State:</label>
                        <input type="text" class="form-control" id="state">
                    </div>
                    <div class="form-group">
                        <label for="state">Zip:</label>
                        <input type="number" class="form-control" id="zip">
                    </div>
                    <div class="form-group">
                        <button class="btn default" id="submit" value="submit-postal">Submit</button>
                    </div>
                </fieldset>
        </div>
        <div class="col-sm-4"></div>
    </div>
`;