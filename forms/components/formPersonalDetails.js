export const formPersonalDetails = `
<div class="row">
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4">
        <fieldset>
            <legend>Personal Details :</legend>
            <div class="form-group">
                <label for="name">Full Name:</label>
                <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="email">E-Mail:</label>
                <input type="email" class="form-control" id="email">
            </div>
             <div class="form-group">
                <label for="mob">Mobile:</label>
                <input type="mobile" class="form-control" id="mobile">
            </div>
            <div class="form-group">
                <label for="pwd">GitHub Profile:</label>
                <input type="text" class="form-control" id="github">
            </div>
            <div class="form-group">
               <button class="btn default" id="submit" value="submit-personal">Submit</button>
            </div>
            </fieldset>
    </div>
    <div class="col-sm-4"></div>
</div>
`;