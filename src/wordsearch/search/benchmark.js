import { Suite } from 'benchmark';
import { solve } from '../';
import algorithms from './algorithms';
import puzzles from '../data';

const suite = new Suite();

algorithms.forEach(({ name: algoName, f: findMatches }) => {
  Object.entries(puzzles)
    .forEach(([ puzzleName, puzzle ]) =>
      suite.add(`solving ${puzzleName} puzzle using ${algoName} algorithm`, () => solve(puzzle, findMatches))
    );
});

suite.on('cycle', (evt) => console.log(evt.target.toString()));

// TODO: Print Full Report

suite.run();
