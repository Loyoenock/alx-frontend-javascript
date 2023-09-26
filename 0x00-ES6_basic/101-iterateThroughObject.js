iexport default function iterateThroughObject(reportWithIterator) {
  return [...reportWithIterator].join(' | ');
}
