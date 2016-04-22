/* tslint:disable:no-unused-variable */
import {Park} from './park';

import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  inject, injectAsync, TestComponentBuilder
} from 'angular2/testing';

import { By }             from 'angular2/platform/browser';
import { provide }        from 'angular2/core';
import { ViewMetadata }   from 'angular2/core';
import { PromiseWrapper } from 'angular2/src/facade/promise';

interface Done {
  (): void;
  fail: (err: any) => void;
}

describe('Park with new', function () {
    it('should instantiate service', () => {
      expect(new Park()).not.toBeNull('Whoopie!');
    });
});
