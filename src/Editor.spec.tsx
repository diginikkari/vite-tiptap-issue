import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { TipTapEditor } from './Editor';
import { describe, it, expect } from 'vitest';

describe('ThemeEditorFeature', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TipTapEditor />);
        expect(baseElement).toBeTruthy();
    });
});
