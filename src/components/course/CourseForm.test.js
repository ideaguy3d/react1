/**
 * Created by Julius Alvarado on 7/4/2017.
 */
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
    let props = {
        course: {}, loading: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    let ren = TestUtils.createRenderer();
    ren.render(<CourseForm {...props}/>);
    let output = ren.getRenderOutput();

    return {
        props,
        output,
        ren
    };
}
describe('CourseForm for react utils', function () {
    it("should renders form and h1", () => {
        const {output} = setup();
        expect(output.type).toBe('form');
        let [h1] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save btn is labeled "Save" when not saving', () => {
        const {output} = setup(false);
        const submitBtn = output.props.children[5];
        expect(submitBtn.props.value).toBe('Save');
    });

    it('save btn labeled "Saving..." when saving', () => {
        const {output} = setup(true);
        const submitBtn = output.props.children[5];
        expect(submitBtn.props.value).toBe('Saving...');
    });
});