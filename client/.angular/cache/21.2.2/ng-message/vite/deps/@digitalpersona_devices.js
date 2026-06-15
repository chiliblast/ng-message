import {
  require_index_umd
} from "./chunk-INH2SPXL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-B4NDS4B7.js";

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// src/app/core/modules/WebSdk/index.js
var require_WebSdk = __commonJS({
  "src/app/core/modules/WebSdk/index.js"(exports, module) {
    (function() {
      var async2 = {};
      function noop() {
      }
      function identity(v) {
        return v;
      }
      function toBool(v) {
        return !!v;
      }
      function notId(v) {
        return !v;
      }
      var previous_async;
      var root = typeof self === "object" && self.self === self && self || typeof global === "object" && global.global === global && global || this;
      if (root != null) {
        previous_async = root.async;
      }
      async2.noConflict = function() {
        root.async = previous_async;
        return async2;
      };
      function only_once(fn) {
        return function() {
          if (fn === null) throw new Error("Callback was already called.");
          fn.apply(this, arguments);
          fn = null;
        };
      }
      function _once(fn) {
        return function() {
          if (fn === null) return;
          fn.apply(this, arguments);
          fn = null;
        };
      }
      var _toString = Object.prototype.toString;
      var _isArray = Array.isArray || function(obj) {
        return _toString.call(obj) === "[object Array]";
      };
      var _isObject = function(obj) {
        var type = typeof obj;
        return type === "function" || type === "object" && !!obj;
      };
      function _isArrayLike(arr) {
        return _isArray(arr) || // has a positive integer length property
        typeof arr.length === "number" && arr.length >= 0 && arr.length % 1 === 0;
      }
      function _arrayEach(arr, iterator) {
        var index = -1, length = arr.length;
        while (++index < length) {
          iterator(arr[index], index, arr);
        }
      }
      function _map(arr, iterator) {
        var index = -1, length = arr.length, result = Array(length);
        while (++index < length) {
          result[index] = iterator(arr[index], index, arr);
        }
        return result;
      }
      function _range(count) {
        return _map(Array(count), function(v, i) {
          return i;
        });
      }
      function _reduce(arr, iterator, memo) {
        _arrayEach(arr, function(x, i, a2) {
          memo = iterator(memo, x, i, a2);
        });
        return memo;
      }
      function _forEachOf(object, iterator) {
        _arrayEach(_keys(object), function(key) {
          iterator(object[key], key);
        });
      }
      function _indexOf(arr, item) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === item) return i;
        }
        return -1;
      }
      var _keys = Object.keys || function(obj) {
        var keys = [];
        for (var k in obj) {
          if (obj.hasOwnProperty(k)) {
            keys.push(k);
          }
        }
        return keys;
      };
      function _keyIterator(coll) {
        var i = -1;
        var len;
        var keys;
        if (_isArrayLike(coll)) {
          len = coll.length;
          return function next() {
            i++;
            return i < len ? i : null;
          };
        } else {
          keys = _keys(coll);
          len = keys.length;
          return function next() {
            i++;
            return i < len ? keys[i] : null;
          };
        }
      }
      function _restParam(func, startIndex) {
        startIndex = startIndex == null ? func.length - 1 : +startIndex;
        return function() {
          var length = Math.max(arguments.length - startIndex, 0);
          var rest = Array(length);
          for (var index = 0; index < length; index++) {
            rest[index] = arguments[index + startIndex];
          }
          switch (startIndex) {
            case 0:
              return func.call(this, rest);
            case 1:
              return func.call(this, arguments[0], rest);
          }
        };
      }
      function _withoutIndex(iterator) {
        return function(value2, index, callback) {
          return iterator(value2, callback);
        };
      }
      var _setImmediate = typeof setImmediate === "function" && setImmediate;
      var _delay = _setImmediate ? function(fn) {
        _setImmediate(fn);
      } : function(fn) {
        setTimeout(function() {
          fn();
        }, 0);
      };
      if (typeof process === "object" && typeof process.nextTick === "function") {
        async2.nextTick = process.nextTick;
      } else {
        async2.nextTick = _delay;
      }
      async2.setImmediate = _setImmediate ? _delay : async2.nextTick;
      async2.forEach = async2.each = function(arr, iterator, callback) {
        return async2.eachOf(arr, _withoutIndex(iterator), callback);
      };
      async2.forEachSeries = async2.eachSeries = function(arr, iterator, callback) {
        return async2.eachOfSeries(arr, _withoutIndex(iterator), callback);
      };
      async2.forEachLimit = async2.eachLimit = function(arr, limit, iterator, callback) {
        return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
      };
      async2.forEachOf = async2.eachOf = function(object, iterator, callback) {
        callback = _once(callback || noop);
        object = object || [];
        var iter = _keyIterator(object);
        var key, completed = 0;
        while ((key = iter()) != null) {
          completed += 1;
          iterator(object[key], key, only_once(done));
        }
        if (completed === 0) callback(null);
        function done(err) {
          completed--;
          if (err) {
            callback(err);
          } else if (key === null && completed <= 0) {
            callback(null);
          }
        }
      };
      async2.forEachOfSeries = async2.eachOfSeries = function(obj, iterator, callback) {
        callback = _once(callback || noop);
        obj = obj || [];
        var nextKey = _keyIterator(obj);
        var key = nextKey();
        function iterate() {
          var sync = true;
          if (key === null) {
            return callback(null);
          }
          iterator(obj[key], key, only_once(function(err) {
            if (err) {
              callback(err);
            } else {
              key = nextKey();
              if (key === null) {
                return callback(null);
              } else {
                if (sync) {
                  async2.setImmediate(iterate);
                } else {
                  iterate();
                }
              }
            }
          }));
          sync = false;
        }
        iterate();
      };
      async2.forEachOfLimit = async2.eachOfLimit = function(obj, limit, iterator, callback) {
        _eachOfLimit(limit)(obj, iterator, callback);
      };
      function _eachOfLimit(limit) {
        return function(obj, iterator, callback) {
          callback = _once(callback || noop);
          obj = obj || [];
          var nextKey = _keyIterator(obj);
          if (limit <= 0) {
            return callback(null);
          }
          var done = false;
          var running = 0;
          var errored = false;
          (function replenish() {
            if (done && running <= 0) {
              return callback(null);
            }
            while (running < limit && !errored) {
              var key = nextKey();
              if (key === null) {
                done = true;
                if (running <= 0) {
                  callback(null);
                }
                return;
              }
              running += 1;
              iterator(obj[key], key, only_once(function(err) {
                running -= 1;
                if (err) {
                  callback(err);
                  errored = true;
                } else {
                  replenish();
                }
              }));
            }
          })();
        };
      }
      function doParallel(fn) {
        return function(obj, iterator, callback) {
          return fn(async2.eachOf, obj, iterator, callback);
        };
      }
      function doParallelLimit(fn) {
        return function(obj, limit, iterator, callback) {
          return fn(_eachOfLimit(limit), obj, iterator, callback);
        };
      }
      function doSeries(fn) {
        return function(obj, iterator, callback) {
          return fn(async2.eachOfSeries, obj, iterator, callback);
        };
      }
      function _asyncMap(eachfn, arr, iterator, callback) {
        callback = _once(callback || noop);
        arr = arr || [];
        var results = _isArrayLike(arr) ? [] : {};
        eachfn(arr, function(value2, index, callback2) {
          iterator(value2, function(err, v) {
            results[index] = v;
            callback2(err);
          });
        }, function(err) {
          callback(err, results);
        });
      }
      async2.map = doParallel(_asyncMap);
      async2.mapSeries = doSeries(_asyncMap);
      async2.mapLimit = doParallelLimit(_asyncMap);
      async2.inject = async2.foldl = async2.reduce = function(arr, memo, iterator, callback) {
        async2.eachOfSeries(arr, function(x, i, callback2) {
          iterator(memo, x, function(err, v) {
            memo = v;
            callback2(err);
          });
        }, function(err) {
          callback(err, memo);
        });
      };
      async2.foldr = async2.reduceRight = function(arr, memo, iterator, callback) {
        var reversed = _map(arr, identity).reverse();
        async2.reduce(reversed, memo, iterator, callback);
      };
      async2.transform = function(arr, memo, iterator, callback) {
        if (arguments.length === 3) {
          callback = iterator;
          iterator = memo;
          memo = _isArray(arr) ? [] : {};
        }
        async2.eachOf(arr, function(v, k, cb) {
          iterator(memo, v, k, cb);
        }, function(err) {
          callback(err, memo);
        });
      };
      function _filter(eachfn, arr, iterator, callback) {
        var results = [];
        eachfn(arr, function(x, index, callback2) {
          iterator(x, function(v) {
            if (v) {
              results.push({ index, value: x });
            }
            callback2();
          });
        }, function() {
          callback(_map(results.sort(function(a2, b) {
            return a2.index - b.index;
          }), function(x) {
            return x.value;
          }));
        });
      }
      async2.select = async2.filter = doParallel(_filter);
      async2.selectLimit = async2.filterLimit = doParallelLimit(_filter);
      async2.selectSeries = async2.filterSeries = doSeries(_filter);
      function _reject(eachfn, arr, iterator, callback) {
        _filter(eachfn, arr, function(value2, cb) {
          iterator(value2, function(v) {
            cb(!v);
          });
        }, callback);
      }
      async2.reject = doParallel(_reject);
      async2.rejectLimit = doParallelLimit(_reject);
      async2.rejectSeries = doSeries(_reject);
      function _createTester(eachfn, check, getResult) {
        return function(arr, limit, iterator, cb) {
          function done() {
            if (cb) cb(getResult(false, void 0));
          }
          function iteratee(x, _, callback) {
            if (!cb) return callback();
            iterator(x, function(v) {
              if (cb && check(v)) {
                cb(getResult(true, x));
                cb = iterator = false;
              }
              callback();
            });
          }
          if (arguments.length > 3) {
            eachfn(arr, limit, iteratee, done);
          } else {
            cb = iterator;
            iterator = limit;
            eachfn(arr, iteratee, done);
          }
        };
      }
      async2.any = async2.some = _createTester(async2.eachOf, toBool, identity);
      async2.someLimit = _createTester(async2.eachOfLimit, toBool, identity);
      async2.all = async2.every = _createTester(async2.eachOf, notId, notId);
      async2.everyLimit = _createTester(async2.eachOfLimit, notId, notId);
      function _findGetResult(v, x) {
        return x;
      }
      async2.detect = _createTester(async2.eachOf, identity, _findGetResult);
      async2.detectSeries = _createTester(async2.eachOfSeries, identity, _findGetResult);
      async2.detectLimit = _createTester(async2.eachOfLimit, identity, _findGetResult);
      async2.sortBy = function(arr, iterator, callback) {
        async2.map(arr, function(x, callback2) {
          iterator(x, function(err, criteria) {
            if (err) {
              callback2(err);
            } else {
              callback2(null, { value: x, criteria });
            }
          });
        }, function(err, results) {
          if (err) {
            return callback(err);
          } else {
            callback(null, _map(results.sort(comparator), function(x) {
              return x.value;
            }));
          }
        });
        function comparator(left, right) {
          var a2 = left.criteria, b = right.criteria;
          return a2 < b ? -1 : a2 > b ? 1 : 0;
        }
      };
      async2.auto = function(tasks, concurrency, callback) {
        if (!callback) {
          callback = concurrency;
          concurrency = null;
        }
        callback = _once(callback || noop);
        var keys = _keys(tasks);
        var remainingTasks = keys.length;
        if (!remainingTasks) {
          return callback(null);
        }
        if (!concurrency) {
          concurrency = remainingTasks;
        }
        var results = {};
        var runningTasks = 0;
        var listeners = [];
        function addListener(fn) {
          listeners.unshift(fn);
        }
        function removeListener(fn) {
          var idx = _indexOf(listeners, fn);
          if (idx >= 0) listeners.splice(idx, 1);
        }
        function taskComplete() {
          remainingTasks--;
          _arrayEach(listeners.slice(0), function(fn) {
            fn();
          });
        }
        addListener(function() {
          if (!remainingTasks) {
            callback(null, results);
          }
        });
        _arrayEach(keys, function(k) {
          var task = _isArray(tasks[k]) ? tasks[k] : [tasks[k]];
          var taskCallback = _restParam(function(err, args) {
            runningTasks--;
            if (args.length <= 1) {
              args = args[0];
            }
            if (err) {
              var safeResults = {};
              _forEachOf(results, function(val, rkey) {
                safeResults[rkey] = val;
              });
              safeResults[k] = args;
              callback(err, safeResults);
            } else {
              results[k] = args;
              async2.setImmediate(taskComplete);
            }
          });
          var requires = task.slice(0, task.length - 1);
          var len = requires.length;
          var dep;
          while (len--) {
            if (!(dep = tasks[requires[len]])) {
              throw new Error("Has inexistant dependency");
            }
            if (_isArray(dep) && _indexOf(dep, k) >= 0) {
              throw new Error("Has cyclic dependencies");
            }
          }
          function ready() {
            return runningTasks < concurrency && _reduce(requires, function(a2, x) {
              return a2 && results.hasOwnProperty(x);
            }, true) && !results.hasOwnProperty(k);
          }
          if (ready()) {
            runningTasks++;
            task[task.length - 1](taskCallback, results);
          } else {
            addListener(listener);
          }
          function listener() {
            if (ready()) {
              runningTasks++;
              removeListener(listener);
              task[task.length - 1](taskCallback, results);
            }
          }
        });
      };
      async2.retry = function(times, task, callback) {
        var DEFAULT_TIMES = 5;
        var DEFAULT_INTERVAL = 0;
        var attempts = [];
        var opts = {
          times: DEFAULT_TIMES,
          interval: DEFAULT_INTERVAL
        };
        function parseTimes(acc, t) {
          if (typeof t === "number") {
            acc.times = parseInt(t, 10) || DEFAULT_TIMES;
          } else if (typeof t === "object") {
            acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
            acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
          } else {
            throw new Error("Unsupported argument type for 'times': " + typeof t);
          }
        }
        var length = arguments.length;
        if (length < 1 || length > 3) {
          throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");
        } else if (length <= 2 && typeof times === "function") {
          callback = task;
          task = times;
        }
        if (typeof times !== "function") {
          parseTimes(opts, times);
        }
        opts.callback = callback;
        opts.task = task;
        function wrappedTask(wrappedCallback, wrappedResults) {
          function retryAttempt(task2, finalAttempt2) {
            return function(seriesCallback) {
              task2(function(err, result) {
                seriesCallback(!err || finalAttempt2, { err, result });
              }, wrappedResults);
            };
          }
          function retryInterval(interval) {
            return function(seriesCallback) {
              setTimeout(function() {
                seriesCallback(null);
              }, interval);
            };
          }
          while (opts.times) {
            var finalAttempt = !(opts.times -= 1);
            attempts.push(retryAttempt(opts.task, finalAttempt));
            if (!finalAttempt && opts.interval > 0) {
              attempts.push(retryInterval(opts.interval));
            }
          }
          async2.series(attempts, function(done, data) {
            data = data[data.length - 1];
            (wrappedCallback || opts.callback)(data.err, data.result);
          });
        }
        return opts.callback ? wrappedTask() : wrappedTask;
      };
      async2.waterfall = function(tasks, callback) {
        callback = _once(callback || noop);
        if (!_isArray(tasks)) {
          var err = new Error("First argument to waterfall must be an array of functions");
          return callback(err);
        }
        if (!tasks.length) {
          return callback();
        }
        function wrapIterator(iterator) {
          return _restParam(function(err2, args) {
            if (err2) {
              callback.apply(null, [err2].concat(args));
            } else {
              var next = iterator.next();
              if (next) {
                args.push(wrapIterator(next));
              } else {
                args.push(callback);
              }
              ensureAsync(iterator).apply(null, args);
            }
          });
        }
        wrapIterator(async2.iterator(tasks))();
      };
      function _parallel(eachfn, tasks, callback) {
        callback = callback || noop;
        var results = _isArrayLike(tasks) ? [] : {};
        eachfn(tasks, function(task, key, callback2) {
          task(_restParam(function(err, args) {
            if (args.length <= 1) {
              args = args[0];
            }
            results[key] = args;
            callback2(err);
          }));
        }, function(err) {
          callback(err, results);
        });
      }
      async2.parallel = function(tasks, callback) {
        _parallel(async2.eachOf, tasks, callback);
      };
      async2.parallelLimit = function(tasks, limit, callback) {
        _parallel(_eachOfLimit(limit), tasks, callback);
      };
      async2.series = function(tasks, callback) {
        _parallel(async2.eachOfSeries, tasks, callback);
      };
      async2.iterator = function(tasks) {
        function makeCallback(index) {
          function fn() {
            if (tasks.length) {
              tasks[index].apply(null, arguments);
            }
            return fn.next();
          }
          fn.next = function() {
            return index < tasks.length - 1 ? makeCallback(index + 1) : null;
          };
          return fn;
        }
        return makeCallback(0);
      };
      async2.apply = _restParam(function(fn, args) {
        return _restParam(function(callArgs) {
          return fn.apply(
            null,
            args.concat(callArgs)
          );
        });
      });
      function _concat(eachfn, arr, fn, callback) {
        var result = [];
        eachfn(arr, function(x, index, cb) {
          fn(x, function(err, y) {
            result = result.concat(y || []);
            cb(err);
          });
        }, function(err) {
          callback(err, result);
        });
      }
      async2.concat = doParallel(_concat);
      async2.concatSeries = doSeries(_concat);
      async2.whilst = function(test, iterator, callback) {
        callback = callback || noop;
        if (test()) {
          var next = _restParam(function(err, args) {
            if (err) {
              callback(err);
            } else if (test.apply(this, args)) {
              iterator(next);
            } else {
              callback(null);
            }
          });
          iterator(next);
        } else {
          callback(null);
        }
      };
      async2.doWhilst = function(iterator, test, callback) {
        var calls = 0;
        return async2.whilst(function() {
          return ++calls <= 1 || test.apply(this, arguments);
        }, iterator, callback);
      };
      async2.until = function(test, iterator, callback) {
        return async2.whilst(function() {
          return !test.apply(this, arguments);
        }, iterator, callback);
      };
      async2.doUntil = function(iterator, test, callback) {
        return async2.doWhilst(iterator, function() {
          return !test.apply(this, arguments);
        }, callback);
      };
      async2.during = function(test, iterator, callback) {
        callback = callback || noop;
        var next = _restParam(function(err, args) {
          if (err) {
            callback(err);
          } else {
            args.push(check);
            test.apply(this, args);
          }
        });
        var check = function(err, truth) {
          if (err) {
            callback(err);
          } else if (truth) {
            iterator(next);
          } else {
            callback(null);
          }
        };
        test(check);
      };
      async2.doDuring = function(iterator, test, callback) {
        var calls = 0;
        async2.during(function(next) {
          if (calls++ < 1) {
            next(null, true);
          } else {
            test.apply(this, arguments);
          }
        }, iterator, callback);
      };
      function _queue(worker, concurrency, payload) {
        if (concurrency == null) {
          concurrency = 1;
        } else if (concurrency === 0) {
          throw new Error("Concurrency must not be zero");
        }
        function _insert(q2, data, pos, callback) {
          if (callback != null && typeof callback !== "function") {
            throw new Error("task callback must be a function");
          }
          q2.started = true;
          if (!_isArray(data)) {
            data = [data];
          }
          if (data.length === 0 && q2.idle()) {
            return async2.setImmediate(function() {
              q2.drain();
            });
          }
          _arrayEach(data, function(task) {
            var item = {
              data: task,
              callback: callback || noop
            };
            if (pos) {
              q2.tasks.unshift(item);
            } else {
              q2.tasks.push(item);
            }
            if (q2.tasks.length === q2.concurrency) {
              q2.saturated();
            }
          });
          async2.setImmediate(q2.process);
        }
        function _next(q2, tasks) {
          return function() {
            workers -= 1;
            var removed = false;
            var args = arguments;
            _arrayEach(tasks, function(task) {
              _arrayEach(workersList, function(worker2, index) {
                if (worker2 === task && !removed) {
                  workersList.splice(index, 1);
                  removed = true;
                }
              });
              task.callback.apply(task, args);
            });
            if (q2.tasks.length + workers === 0) {
              q2.drain();
            }
            q2.process();
          };
        }
        var workers = 0;
        var workersList = [];
        var q = {
          tasks: [],
          concurrency,
          payload,
          saturated: noop,
          empty: noop,
          drain: noop,
          started: false,
          paused: false,
          push: function(data, callback) {
            _insert(q, data, false, callback);
          },
          kill: function() {
            q.drain = noop;
            q.tasks = [];
          },
          unshift: function(data, callback) {
            _insert(q, data, true, callback);
          },
          process: function() {
            if (!q.paused && workers < q.concurrency && q.tasks.length) {
              while (workers < q.concurrency && q.tasks.length) {
                var tasks = q.payload ? q.tasks.splice(0, q.payload) : q.tasks.splice(0, q.tasks.length);
                var data = _map(tasks, function(task) {
                  return task.data;
                });
                if (q.tasks.length === 0) {
                  q.empty();
                }
                workers += 1;
                workersList.push(tasks[0]);
                var cb = only_once(_next(q, tasks));
                worker(data, cb);
              }
            }
          },
          length: function() {
            return q.tasks.length;
          },
          running: function() {
            return workers;
          },
          workersList: function() {
            return workersList;
          },
          idle: function() {
            return q.tasks.length + workers === 0;
          },
          pause: function() {
            q.paused = true;
          },
          resume: function() {
            if (q.paused === false) {
              return;
            }
            q.paused = false;
            var resumeCount = Math.min(q.concurrency, q.tasks.length);
            for (var w = 1; w <= resumeCount; w++) {
              async2.setImmediate(q.process);
            }
          }
        };
        return q;
      }
      async2.queue = function(worker, concurrency) {
        var q = _queue(function(items, cb) {
          worker(items[0], cb);
        }, concurrency, 1);
        return q;
      };
      async2.priorityQueue = function(worker, concurrency) {
        function _compareTasks(a2, b) {
          return a2.priority - b.priority;
        }
        function _binarySearch(sequence, item, compare) {
          var beg = -1, end = sequence.length - 1;
          while (beg < end) {
            var mid = beg + (end - beg + 1 >>> 1);
            if (compare(item, sequence[mid]) >= 0) {
              beg = mid;
            } else {
              end = mid - 1;
            }
          }
          return beg;
        }
        function _insert(q2, data, priority, callback) {
          if (callback != null && typeof callback !== "function") {
            throw new Error("task callback must be a function");
          }
          q2.started = true;
          if (!_isArray(data)) {
            data = [data];
          }
          if (data.length === 0) {
            return async2.setImmediate(function() {
              q2.drain();
            });
          }
          _arrayEach(data, function(task) {
            var item = {
              data: task,
              priority,
              callback: typeof callback === "function" ? callback : noop
            };
            q2.tasks.splice(_binarySearch(q2.tasks, item, _compareTasks) + 1, 0, item);
            if (q2.tasks.length === q2.concurrency) {
              q2.saturated();
            }
            async2.setImmediate(q2.process);
          });
        }
        var q = async2.queue(worker, concurrency);
        q.push = function(data, priority, callback) {
          _insert(q, data, priority, callback);
        };
        delete q.unshift;
        return q;
      };
      async2.cargo = function(worker, payload) {
        return _queue(worker, 1, payload);
      };
      function _console_fn(name) {
        return _restParam(function(fn, args) {
          fn.apply(null, args.concat([_restParam(function(err, args2) {
            if (typeof console === "object") {
              if (err) {
                if (console.error) {
                  console.error(err);
                }
              } else if (console[name]) {
                _arrayEach(args2, function(x) {
                  console[name](x);
                });
              }
            }
          })]));
        });
      }
      async2.log = _console_fn("log");
      async2.dir = _console_fn("dir");
      async2.memoize = function(fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || identity;
        var memoized = _restParam(function memoized2(args) {
          var callback = args.pop();
          var key = hasher.apply(null, args);
          if (key in memo) {
            async2.setImmediate(function() {
              callback.apply(null, memo[key]);
            });
          } else if (key in queues) {
            queues[key].push(callback);
          } else {
            queues[key] = [callback];
            fn.apply(null, args.concat([_restParam(function(args2) {
              memo[key] = args2;
              var q = queues[key];
              delete queues[key];
              for (var i = 0, l = q.length; i < l; i++) {
                q[i].apply(null, args2);
              }
            })]));
          }
        });
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
      };
      async2.unmemoize = function(fn) {
        return function() {
          return (fn.unmemoized || fn).apply(null, arguments);
        };
      };
      function _times(mapper) {
        return function(count, iterator, callback) {
          mapper(_range(count), iterator, callback);
        };
      }
      async2.times = _times(async2.map);
      async2.timesSeries = _times(async2.mapSeries);
      async2.timesLimit = function(count, limit, iterator, callback) {
        return async2.mapLimit(_range(count), limit, iterator, callback);
      };
      async2.seq = function() {
        var fns = arguments;
        return _restParam(function(args) {
          var that = this;
          var callback = args[args.length - 1];
          if (typeof callback == "function") {
            args.pop();
          } else {
            callback = noop;
          }
          async2.reduce(
            fns,
            args,
            function(newargs, fn, cb) {
              fn.apply(that, newargs.concat([_restParam(function(err, nextargs) {
                cb(err, nextargs);
              })]));
            },
            function(err, results) {
              callback.apply(that, [err].concat(results));
            }
          );
        });
      };
      async2.compose = function() {
        return async2.seq.apply(null, Array.prototype.reverse.call(arguments));
      };
      function _applyEach(eachfn) {
        return _restParam(function(fns, args) {
          var go = _restParam(function(args2) {
            var that = this;
            var callback = args2.pop();
            return eachfn(
              fns,
              function(fn, _, cb) {
                fn.apply(that, args2.concat([cb]));
              },
              callback
            );
          });
          if (args.length) {
            return go.apply(this, args);
          } else {
            return go;
          }
        });
      }
      async2.applyEach = _applyEach(async2.eachOf);
      async2.applyEachSeries = _applyEach(async2.eachOfSeries);
      async2.forever = function(fn, callback) {
        var done = only_once(callback || noop);
        var task = ensureAsync(fn);
        function next(err) {
          if (err) {
            return done(err);
          }
          task(next);
        }
        next();
      };
      function ensureAsync(fn) {
        return _restParam(function(args) {
          var callback = args.pop();
          args.push(function() {
            var innerArgs = arguments;
            if (sync) {
              async2.setImmediate(function() {
                callback.apply(null, innerArgs);
              });
            } else {
              callback.apply(null, innerArgs);
            }
          });
          var sync = true;
          fn.apply(this, args);
          sync = false;
        });
      }
      async2.ensureAsync = ensureAsync;
      async2.constant = _restParam(function(values) {
        var args = [null].concat(values);
        return function(callback) {
          return callback.apply(this, args);
        };
      });
      async2.wrapSync = async2.asyncify = function asyncify(func) {
        return _restParam(function(args) {
          var callback = args.pop();
          var result;
          try {
            result = func.apply(this, args);
          } catch (e) {
            return callback(e);
          }
          if (_isObject(result) && typeof result.then === "function") {
            result.then(function(value2) {
              callback(null, value2);
            })["catch"](function(err) {
              callback(err.message ? err : new Error(err));
            });
          } else {
            callback(null, result);
          }
        });
      };
      if (typeof module === "object" && module.exports) {
        module.exports = async2;
      } else if (typeof define === "function" && define.amd) {
        define("async", function() {
          return async2;
        });
      } else {
        root.async = async2;
      }
    })();
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("sha1", [], factory);
      } else {
        window.sha1 = factory();
      }
    })(function() {
      var sha12 = function() {
        var hex_chr = "0123456789abcdef";
        function hex(num) {
          var str = "";
          for (var j = 7; j >= 0; j--)
            str += hex_chr.charAt(num >> j * 4 & 15);
          return str;
        }
        function str2blks_SHA1(str) {
          var nblk = (str.length + 8 >> 6) + 1;
          var blks = new Array(nblk * 16);
          for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
          for (i = 0; i < str.length; i++)
            blks[i >> 2] |= str.charCodeAt(i) << 24 - i % 4 * 8;
          blks[i >> 2] |= 128 << 24 - i % 4 * 8;
          blks[nblk * 16 - 1] = str.length * 8;
          return blks;
        }
        function hex2blks_SHA1(hex2) {
          var len = hex2.length + 1 >> 1;
          var nblk = (len + 8 >> 6) + 1;
          var blks = new Array(nblk * 16);
          for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
          for (i = 0; i < len; i++)
            blks[i >> 2] |= parseInt(hex2.substr(2 * i, 2), 16) << 24 - i % 4 * 8;
          blks[i >> 2] |= 128 << 24 - i % 4 * 8;
          blks[nblk * 16 - 1] = len * 8;
          return blks;
        }
        function ba2blks_SHA1(ba, off, len) {
          var nblk = (len + 8 >> 6) + 1;
          var blks = new Array(nblk * 16);
          for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
          for (i = 0; i < len; i++)
            blks[i >> 2] |= (ba[off + i] & 255) << 24 - i % 4 * 8;
          blks[i >> 2] |= 128 << 24 - i % 4 * 8;
          blks[nblk * 16 - 1] = len * 8;
          return blks;
        }
        function add(x, y) {
          var lsw = (x & 65535) + (y & 65535);
          var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return msw << 16 | lsw & 65535;
        }
        function rol(num, cnt) {
          return num << cnt | num >>> 32 - cnt;
        }
        function ft(t, b, c, d) {
          if (t < 20) return b & c | ~b & d;
          if (t < 40) return b ^ c ^ d;
          if (t < 60) return b & c | b & d | c & d;
          return b ^ c ^ d;
        }
        function kt(t) {
          return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
        }
        function calcSHA1(str) {
          return calcSHA1Blks(str2blks_SHA1(str));
        }
        function calcSHA1Hex(str) {
          return calcSHA1Blks(hex2blks_SHA1(str));
        }
        function calcSHA1BA(ba) {
          return calcSHA1Blks(ba2blks_SHA1(ba, 0, ba.length));
        }
        function calcSHA1BAEx(ba, off, len) {
          return calcSHA1Blks(ba2blks_SHA1(ba, off, len));
        }
        function calcSHA1Blks(x) {
          var s = calcSHA1Raw(x);
          return hex(s[0]) + hex(s[1]) + hex(s[2]) + hex(s[3]) + hex(s[4]);
        }
        function calcSHA1Raw(x) {
          var w = new Array(80);
          var a2 = 1732584193;
          var b = -271733879;
          var c = -1732584194;
          var d = 271733878;
          var e = -1009589776;
          for (var i = 0; i < x.length; i += 16) {
            var olda = a2;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            var olde = e;
            for (var j = 0; j < 80; j++) {
              var t;
              if (j < 16) w[j] = x[i + j];
              else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
              t = add(add(rol(a2, 5), ft(j, b, c, d)), add(add(e, w[j]), kt(j)));
              e = d;
              d = c;
              c = rol(b, 30);
              b = a2;
              a2 = t;
            }
            a2 = add(a2, olda);
            b = add(b, oldb);
            c = add(c, oldc);
            d = add(d, oldd);
            e = add(e, olde);
          }
          return new Array(a2, b, c, d, e);
        }
        function core_sha1(x, len) {
          x[len >> 5] |= 128 << 24 - len % 32;
          x[(len + 64 >> 9 << 4) + 15] = len;
          return calcSHA1Raw(x);
        }
        return {
          calcSHA1,
          calcSHA1Hex,
          calcSHA1BA,
          calcSHA1BAEx
        };
      };
      return sha12();
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("sjcl", [], factory);
      } else {
        window.sjcl = factory();
      }
    })(function() {
      "use strict";
      var sjcl2 = {
        /** @namespace Symmetric ciphers. */
        cipher: {},
        /** @namespace Hash functions.  Right now only SHA256 is implemented. */
        hash: {},
        /** @namespace Key exchange functions.  Right now only SRP is implemented. */
        keyexchange: {},
        /** @namespace Block cipher modes of operation. */
        mode: {},
        /** @namespace Miscellaneous.  HMAC and PBKDF2. */
        misc: {},
        /**
         * @namespace Bit array encoders and decoders.
         *
         * @description
         * The members of this namespace are functions which translate between
         * SJCL's bitArrays and other objects (usually strings).  Because it
         * isn't always clear which direction is encoding and which is decoding,
         * the method names are "fromBits" and "toBits".
         */
        codec: {},
        /** @namespace Exceptions. */
        exception: {
          /** @constructor Ciphertext is corrupt. */
          corrupt: function(message) {
            this.toString = function() {
              return "CORRUPT: " + this.message;
            };
            this.message = message;
          },
          /** @constructor Invalid parameter. */
          invalid: function(message) {
            this.toString = function() {
              return "INVALID: " + this.message;
            };
            this.message = message;
          },
          /** @constructor Bug or missing feature in SJCL. @constructor */
          bug: function(message) {
            this.toString = function() {
              return "BUG: " + this.message;
            };
            this.message = message;
          },
          /** @constructor Something isn't ready. */
          notReady: function(message) {
            this.toString = function() {
              return "NOT READY: " + this.message;
            };
            this.message = message;
          }
        }
      };
      sjcl2.bitArray = {
        /**
         * Array slices in units of bits.
         * @param {bitArray} a The array to slice.
         * @param {Number} bstart The offset to the start of the slice, in bits.
         * @param {Number} bend The offset to the end of the slice, in bits.  If this is undefined,
         * slice until the end of the array.
         * @return {bitArray} The requested slice.
         */
        bitSlice: function(a2, bstart, bend) {
          a2 = sjcl2.bitArray._shiftRight(a2.slice(bstart / 32), 32 - (bstart & 31)).slice(1);
          return bend === void 0 ? a2 : sjcl2.bitArray.clamp(a2, bend - bstart);
        },
        /**
         * Extract a number packed into a bit array.
         * @param {bitArray} a The array to slice.
         * @param {Number} bstart The offset to the start of the slice, in bits.
         * @param {Number} length The length of the number to extract.
         * @return {Number} The requested slice.
         */
        extract: function(a2, bstart, blength) {
          var x, sh = Math.floor(-bstart - blength & 31);
          if ((bstart + blength - 1 ^ bstart) & -32) {
            x = a2[bstart / 32 | 0] << 32 - sh ^ a2[bstart / 32 + 1 | 0] >>> sh;
          } else {
            x = a2[bstart / 32 | 0] >>> sh;
          }
          return x & (1 << blength) - 1;
        },
        /**
         * Concatenate two bit arrays.
         * @param {bitArray} a1 The first array.
         * @param {bitArray} a2 The second array.
         * @return {bitArray} The concatenation of a1 and a2.
         */
        concat: function(a1, a2) {
          if (a1.length === 0 || a2.length === 0) {
            return a1.concat(a2);
          }
          var last = a1[a1.length - 1], shift = sjcl2.bitArray.getPartial(last);
          if (shift === 32) {
            return a1.concat(a2);
          } else {
            return sjcl2.bitArray._shiftRight(a2, shift, last | 0, a1.slice(0, a1.length - 1));
          }
        },
        /**
         * Find the length of an array of bits.
         * @param {bitArray} a The array.
         * @return {Number} The length of a, in bits.
         */
        bitLength: function(a2) {
          var l = a2.length, x;
          if (l === 0) {
            return 0;
          }
          x = a2[l - 1];
          return (l - 1) * 32 + sjcl2.bitArray.getPartial(x);
        },
        /**
         * Truncate an array.
         * @param {bitArray} a The array.
         * @param {Number} len The length to truncate to, in bits.
         * @return {bitArray} A new array, truncated to len bits.
         */
        clamp: function(a2, len) {
          if (a2.length * 32 < len) {
            return a2;
          }
          a2 = a2.slice(0, Math.ceil(len / 32));
          var l = a2.length;
          len = len & 31;
          if (l > 0 && len) {
            a2[l - 1] = sjcl2.bitArray.partial(len, a2[l - 1] & 2147483648 >> len - 1, 1);
          }
          return a2;
        },
        /**
         * Make a partial word for a bit array.
         * @param {Number} len The number of bits in the word.
         * @param {Number} x The bits.
         * @param {Number} [0] _end Pass 1 if x has already been shifted to the high side.
         * @return {Number} The partial word.
         */
        partial: function(len, x, _end) {
          if (len === 32) {
            return x;
          }
          return (_end ? x | 0 : x << 32 - len) + len * 1099511627776;
        },
        /**
         * Get the number of bits used by a partial word.
         * @param {Number} x The partial word.
         * @return {Number} The number of bits used by the partial word.
         */
        getPartial: function(x) {
          return Math.round(x / 1099511627776) || 32;
        },
        /**
         * Compare two arrays for equality in a predictable amount of time.
         * @param {bitArray} a The first array.
         * @param {bitArray} b The second array.
         * @return {boolean} true if a == b; false otherwise.
         */
        equal: function(a2, b) {
          if (sjcl2.bitArray.bitLength(a2) !== sjcl2.bitArray.bitLength(b)) {
            return false;
          }
          var x = 0, i;
          for (i = 0; i < a2.length; i++) {
            x |= a2[i] ^ b[i];
          }
          return x === 0;
        },
        /** Shift an array right.
         * @param {bitArray} a The array to shift.
         * @param {Number} shift The number of bits to shift.
         * @param {Number} [carry=0] A byte to carry in
         * @param {bitArray} [out=[]] An array to prepend to the output.
         * @private
         */
        _shiftRight: function(a2, shift, carry, out) {
          var i, last2 = 0, shift2;
          if (out === void 0) {
            out = [];
          }
          for (; shift >= 32; shift -= 32) {
            out.push(carry);
            carry = 0;
          }
          if (shift === 0) {
            return out.concat(a2);
          }
          for (i = 0; i < a2.length; i++) {
            out.push(carry | a2[i] >>> shift);
            carry = a2[i] << 32 - shift;
          }
          last2 = a2.length ? a2[a2.length - 1] : 0;
          shift2 = sjcl2.bitArray.getPartial(last2);
          out.push(sjcl2.bitArray.partial(shift + shift2 & 31, shift + shift2 > 32 ? carry : out.pop(), 1));
          return out;
        },
        /** xor a block of 4 words together.
         * @private
         */
        _xor4: function(x, y) {
          return [x[0] ^ y[0], x[1] ^ y[1], x[2] ^ y[2], x[3] ^ y[3]];
        },
        /** byteswap a word array inplace.
         * (does not handle partial words)
         * @param {sjcl.bitArray} a word array
         * @return {sjcl.bitArray} byteswapped array
         */
        byteswapM: function(a2) {
          var i, v, m = 65280;
          for (i = 0; i < a2.length; ++i) {
            v = a2[i];
            a2[i] = v >>> 24 | v >>> 8 & m | (v & m) << 8 | v << 24;
          }
          return a2;
        }
      };
      sjcl2.hash.sha256 = function(hash) {
        if (!this._key[0]) {
          this._precompute();
        }
        if (hash) {
          this._h = hash._h.slice(0);
          this._buffer = hash._buffer.slice(0);
          this._length = hash._length;
        } else {
          this.reset();
        }
      };
      sjcl2.hash.sha256.hash = function(data) {
        return new sjcl2.hash.sha256().update(data).finalize();
      };
      sjcl2.hash.sha256.prototype = {
        /**
         * The hash's block size, in bits.
         * @constant
         */
        blockSize: 512,
        /**
         * Reset the hash state.
         * @return this
         */
        reset: function() {
          this._h = this._init.slice(0);
          this._buffer = [];
          this._length = 0;
          return this;
        },
        /**
         * Input several words to the hash.
         * @param {bitArray|String} data the data to hash.
         * @return this
         */
        update: function(data) {
          if (typeof data === "string") {
            data = sjcl2.codec.utf8String.toBits(data);
          }
          var i, b = this._buffer = sjcl2.bitArray.concat(this._buffer, data), ol = this._length, nl = this._length = ol + sjcl2.bitArray.bitLength(data);
          for (i = 512 + ol & -512; i <= nl; i += 512) {
            this._block(b.splice(0, 16));
          }
          return this;
        },
        /**
         * Complete hashing and output the hash value.
         * @return {bitArray} The hash value, an array of 8 big-endian words.
         */
        finalize: function() {
          var i, b = this._buffer, h = this._h;
          b = sjcl2.bitArray.concat(b, [sjcl2.bitArray.partial(1, 1)]);
          for (i = b.length + 2; i & 15; i++) {
            b.push(0);
          }
          b.push(Math.floor(this._length / 4294967296));
          b.push(this._length | 0);
          while (b.length) {
            this._block(b.splice(0, 16));
          }
          this.reset();
          return h;
        },
        /**
         * The SHA-256 initialization vector, to be precomputed.
         * @private
         */
        _init: [],
        /*
        _init:[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],
        */
        /**
         * The SHA-256 hash key, to be precomputed.
         * @private
         */
        _key: [],
        /*
        _key:
          [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
           0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
           0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
           0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
           0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
           0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
           0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
           0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2],
        */
        /**
         * Function to precompute _init and _key.
         * @private
         */
        _precompute: function() {
          var i = 0, prime = 2, factor;
          function frac(x) {
            return (x - Math.floor(x)) * 4294967296 | 0;
          }
          outer: for (; i < 64; prime++) {
            for (factor = 2; factor * factor <= prime; factor++) {
              if (prime % factor === 0) {
                continue outer;
              }
            }
            if (i < 8) {
              this._init[i] = frac(Math.pow(prime, 1 / 2));
            }
            this._key[i] = frac(Math.pow(prime, 1 / 3));
            i++;
          }
        },
        /**
         * Perform one cycle of SHA-256.
         * @param {bitArray} words one block of words.
         * @private
         */
        _block: function(words) {
          var i, tmp, a2, b, w = words.slice(0), h = this._h, k = this._key, h0 = h[0], h1 = h[1], h2 = h[2], h3 = h[3], h4 = h[4], h5 = h[5], h6 = h[6], h7 = h[7];
          for (i = 0; i < 64; i++) {
            if (i < 16) {
              tmp = w[i];
            } else {
              a2 = w[i + 1 & 15];
              b = w[i + 14 & 15];
              tmp = w[i & 15] = (a2 >>> 7 ^ a2 >>> 18 ^ a2 >>> 3 ^ a2 << 25 ^ a2 << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i & 15] + w[i + 9 & 15] | 0;
            }
            tmp = tmp + h7 + (h4 >>> 6 ^ h4 >>> 11 ^ h4 >>> 25 ^ h4 << 26 ^ h4 << 21 ^ h4 << 7) + (h6 ^ h4 & (h5 ^ h6)) + k[i];
            h7 = h6;
            h6 = h5;
            h5 = h4;
            h4 = h3 + tmp | 0;
            h3 = h2;
            h2 = h1;
            h1 = h0;
            h0 = tmp + (h1 & h2 ^ h3 & (h1 ^ h2)) + (h1 >>> 2 ^ h1 >>> 13 ^ h1 >>> 22 ^ h1 << 30 ^ h1 << 19 ^ h1 << 10) | 0;
          }
          h[0] = h[0] + h0 | 0;
          h[1] = h[1] + h1 | 0;
          h[2] = h[2] + h2 | 0;
          h[3] = h[3] + h3 | 0;
          h[4] = h[4] + h4 | 0;
          h[5] = h[5] + h5 | 0;
          h[6] = h[6] + h6 | 0;
          h[7] = h[7] + h7 | 0;
        }
      };
      sjcl2.cipher.aes = function(key) {
        if (!this._tables[0][0][0]) {
          this._precompute();
        }
        var i, j, tmp, encKey, decKey, sbox = this._tables[0][4], decTable = this._tables[1], keyLen = key.length, rcon = 1;
        if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
          throw new sjcl2.exception.invalid("invalid aes key size");
        }
        this._key = [encKey = key.slice(0), decKey = []];
        for (i = keyLen; i < 4 * keyLen + 28; i++) {
          tmp = encKey[i - 1];
          if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
            tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
            if (i % keyLen === 0) {
              tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
              rcon = rcon << 1 ^ (rcon >> 7) * 283;
            }
          }
          encKey[i] = encKey[i - keyLen] ^ tmp;
        }
        for (j = 0; i; j++, i--) {
          tmp = encKey[j & 3 ? i : i - 4];
          if (i <= 4 || j < 4) {
            decKey[j] = tmp;
          } else {
            decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
          }
        }
      };
      sjcl2.cipher.aes.prototype = {
        // public
        /* Something like this might appear here eventually
        name: "AES",
        blockSize: 4,
        keySizes: [4,6,8],
        */
        /**
         * Encrypt an array of 4 big-endian words.
         * @param {Array} data The plaintext.
         * @return {Array} The ciphertext.
         */
        encrypt: function(data) {
          return this._crypt(data, 0);
        },
        /**
         * Decrypt an array of 4 big-endian words.
         * @param {Array} data The ciphertext.
         * @return {Array} The plaintext.
         */
        decrypt: function(data) {
          return this._crypt(data, 1);
        },
        /**
         * The expanded S-box and inverse S-box tables.  These will be computed
         * on the client so that we don't have to send them down the wire.
         *
         * There are two tables, _tables[0] is for encryption and
         * _tables[1] is for decryption.
         *
         * The first 4 sub-tables are the expanded S-box with MixColumns.  The
         * last (_tables[01][4]) is the S-box itself.
         *
         * @private
         */
        _tables: [[[], [], [], [], []], [[], [], [], [], []]],
        /**
         * Expand the S-box tables.
         *
         * @private
         */
        _precompute: function() {
          var encTable = this._tables[0], decTable = this._tables[1], sbox = encTable[4], sboxInv = decTable[4], i, x, xInv, d = [], th = [], x2, x4, x8, s, tEnc, tDec;
          for (i = 0; i < 256; i++) {
            th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
          }
          for (x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
            s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
            s = s >> 8 ^ s & 255 ^ 99;
            sbox[x] = s;
            sboxInv[s] = x;
            x8 = d[x4 = d[x2 = d[x]]];
            tDec = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
            tEnc = d[s] * 257 ^ s * 16843008;
            for (i = 0; i < 4; i++) {
              encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
              decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
            }
          }
          for (i = 0; i < 5; i++) {
            encTable[i] = encTable[i].slice(0);
            decTable[i] = decTable[i].slice(0);
          }
        },
        /**
         * Encryption and decryption core.
         * @param {Array} input Four words to be encrypted or decrypted.
         * @param dir The direction, 0 for encrypt and 1 for decrypt.
         * @return {Array} The four encrypted or decrypted words.
         * @private
         */
        _crypt: function(input, dir) {
          if (input.length !== 4) {
            throw new sjcl2.exception.invalid("invalid aes block size");
          }
          var key = this._key[dir], a2 = input[0] ^ key[0], b = input[dir ? 3 : 1] ^ key[1], c = input[2] ^ key[2], d = input[dir ? 1 : 3] ^ key[3], a22, b2, c2, nInnerRounds = key.length / 4 - 2, i, kIndex = 4, out = [0, 0, 0, 0], table = this._tables[dir], t0 = table[0], t1 = table[1], t2 = table[2], t3 = table[3], sbox = table[4];
          for (i = 0; i < nInnerRounds; i++) {
            a22 = t0[a2 >>> 24] ^ t1[b >> 16 & 255] ^ t2[c >> 8 & 255] ^ t3[d & 255] ^ key[kIndex];
            b2 = t0[b >>> 24] ^ t1[c >> 16 & 255] ^ t2[d >> 8 & 255] ^ t3[a2 & 255] ^ key[kIndex + 1];
            c2 = t0[c >>> 24] ^ t1[d >> 16 & 255] ^ t2[a2 >> 8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
            d = t0[d >>> 24] ^ t1[a2 >> 16 & 255] ^ t2[b >> 8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
            kIndex += 4;
            a2 = a22;
            b = b2;
            c = c2;
          }
          for (i = 0; i < 4; i++) {
            out[dir ? 3 & -i : i] = sbox[a2 >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
            a22 = a2;
            a2 = b;
            b = c;
            c = d;
            d = a22;
          }
          return out;
        }
      };
      sjcl2.prng = function(defaultParanoia) {
        this._pools = [new sjcl2.hash.sha256()];
        this._poolEntropy = [0];
        this._reseedCount = 0;
        this._robins = {};
        this._eventId = 0;
        this._collectorIds = {};
        this._collectorIdNext = 0;
        this._strength = 0;
        this._poolStrength = 0;
        this._nextReseed = 0;
        this._key = [0, 0, 0, 0, 0, 0, 0, 0];
        this._counter = [0, 0, 0, 0];
        this._cipher = void 0;
        this._defaultParanoia = defaultParanoia;
        this._collectorsStarted = false;
        this._callbacks = { progress: {}, seeded: {} };
        this._callbackI = 0;
        this._NOT_READY = 0;
        this._READY = 1;
        this._REQUIRES_RESEED = 2;
        this._MAX_WORDS_PER_BURST = 65536;
        this._PARANOIA_LEVELS = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024];
        this._MILLISECONDS_PER_RESEED = 3e4;
        this._BITS_PER_RESEED = 80;
      };
      sjcl2.prng.prototype = {
        /** Generate several random words, and return them in an array.
         * A word consists of 32 bits (4 bytes)
         * @param {Number} nwords The number of words to generate.
         */
        randomWords: function(nwords, paranoia) {
          var out = [], i, readiness = this.isReady(paranoia), g;
          if (readiness === this._NOT_READY) {
            throw new sjcl2.exception.notReady("generator isn't seeded");
          } else if (readiness & this._REQUIRES_RESEED) {
            this._reseedFromPools(!(readiness & this._READY));
          }
          for (i = 0; i < nwords; i += 4) {
            if ((i + 1) % this._MAX_WORDS_PER_BURST === 0) {
              this._gate();
            }
            g = this._gen4words();
            out.push(g[0], g[1], g[2], g[3]);
          }
          this._gate();
          return out.slice(0, nwords);
        },
        setDefaultParanoia: function(paranoia, allowZeroParanoia) {
          if (paranoia === 0 && allowZeroParanoia !== "Setting paranoia=0 will ruin your security; use it only for testing") {
            throw "Setting paranoia=0 will ruin your security; use it only for testing";
          }
          this._defaultParanoia = paranoia;
        },
        /**
         * Add entropy to the pools.
         * @param data The entropic value.  Should be a 32-bit integer, array of 32-bit integers, or string
         * @param {Number} estimatedEntropy The estimated entropy of data, in bits
         * @param {String} source The source of the entropy, eg "mouse"
         */
        addEntropy: function(data, estimatedEntropy, source) {
          source = source || "user";
          var id, i, tmp, t = (/* @__PURE__ */ new Date()).valueOf(), robin = this._robins[source], oldReady = this.isReady(), err = 0, objName;
          id = this._collectorIds[source];
          if (id === void 0) {
            id = this._collectorIds[source] = this._collectorIdNext++;
          }
          if (robin === void 0) {
            robin = this._robins[source] = 0;
          }
          this._robins[source] = (this._robins[source] + 1) % this._pools.length;
          switch (typeof data) {
            case "number":
              if (estimatedEntropy === void 0) {
                estimatedEntropy = 1;
              }
              this._pools[robin].update([id, this._eventId++, 1, estimatedEntropy, t, 1, data | 0]);
              break;
            case "object":
              objName = Object.prototype.toString.call(data);
              if (objName === "[object Uint32Array]") {
                tmp = [];
                for (i = 0; i < data.length; i++) {
                  tmp.push(data[i]);
                }
                data = tmp;
              } else {
                if (objName !== "[object Array]") {
                  err = 1;
                }
                for (i = 0; i < data.length && !err; i++) {
                  if (typeof data[i] !== "number") {
                    err = 1;
                  }
                }
              }
              if (!err) {
                if (estimatedEntropy === void 0) {
                  estimatedEntropy = 0;
                  for (i = 0; i < data.length; i++) {
                    tmp = data[i];
                    while (tmp > 0) {
                      estimatedEntropy++;
                      tmp = tmp >>> 1;
                    }
                  }
                }
                this._pools[robin].update([id, this._eventId++, 2, estimatedEntropy, t, data.length].concat(data));
              }
              break;
            case "string":
              if (estimatedEntropy === void 0) {
                estimatedEntropy = data.length;
              }
              this._pools[robin].update([id, this._eventId++, 3, estimatedEntropy, t, data.length]);
              this._pools[robin].update(data);
              break;
            default:
              err = 1;
          }
          if (err) {
            throw new sjcl2.exception.bug("random: addEntropy only supports number, array of numbers or string");
          }
          this._poolEntropy[robin] += estimatedEntropy;
          this._poolStrength += estimatedEntropy;
          if (oldReady === this._NOT_READY) {
            if (this.isReady() !== this._NOT_READY) {
              this._fireEvent("seeded", Math.max(this._strength, this._poolStrength));
            }
            this._fireEvent("progress", this.getProgress());
          }
        },
        /** Is the generator ready? */
        isReady: function(paranoia) {
          var entropyRequired = this._PARANOIA_LEVELS[paranoia !== void 0 ? paranoia : this._defaultParanoia];
          if (this._strength && this._strength >= entropyRequired) {
            return this._poolEntropy[0] > this._BITS_PER_RESEED && (/* @__PURE__ */ new Date()).valueOf() > this._nextReseed ? this._REQUIRES_RESEED | this._READY : this._READY;
          } else {
            return this._poolStrength >= entropyRequired ? this._REQUIRES_RESEED | this._NOT_READY : this._NOT_READY;
          }
        },
        /** Get the generator's progress toward readiness, as a fraction */
        getProgress: function(paranoia) {
          var entropyRequired = this._PARANOIA_LEVELS[paranoia ? paranoia : this._defaultParanoia];
          if (this._strength >= entropyRequired) {
            return 1;
          } else {
            return this._poolStrength > entropyRequired ? 1 : this._poolStrength / entropyRequired;
          }
        },
        /** start the built-in entropy collectors */
        startCollectors: function() {
          if (this._collectorsStarted) {
            return;
          }
          this._eventListener = {
            loadTimeCollector: this._bind(this._loadTimeCollector),
            mouseCollector: this._bind(this._mouseCollector),
            keyboardCollector: this._bind(this._keyboardCollector),
            accelerometerCollector: this._bind(this._accelerometerCollector),
            touchCollector: this._bind(this._touchCollector)
          };
          if (window.addEventListener) {
            window.addEventListener("load", this._eventListener.loadTimeCollector, false);
            window.addEventListener("keypress", this._eventListener.keyboardCollector, false);
          } else if (document.attachEvent) {
            document.attachEvent("onload", this._eventListener.loadTimeCollector);
            document.attachEvent("keypress", this._eventListener.keyboardCollector);
          } else {
            throw new sjcl2.exception.bug("can't attach event");
          }
          this._collectorsStarted = true;
        },
        /** stop the built-in entropy collectors */
        stopCollectors: function() {
          if (!this._collectorsStarted) {
            return;
          }
          if (window.removeEventListener) {
            window.removeEventListener("load", this._eventListener.loadTimeCollector, false);
            window.removeEventListener("keypress", this._eventListener.keyboardCollector, false);
          } else if (document.detachEvent) {
            document.detachEvent("onload", this._eventListener.loadTimeCollector);
            document.detachEvent("keypress", this._eventListener.keyboardCollector);
          }
          this._collectorsStarted = false;
        },
        /* use a cookie to store entropy.
        useCookie: function (all_cookies) {
            throw new sjcl.exception.bug("random: useCookie is unimplemented");
        },*/
        /** add an event listener for progress or seeded-ness. */
        addEventListener: function(name, callback) {
          this._callbacks[name][this._callbackI++] = callback;
        },
        /** remove an event listener for progress or seeded-ness */
        removeEventListener: function(name, cb) {
          var i, j, cbs = this._callbacks[name], jsTemp = [];
          for (j in cbs) {
            if (cbs.hasOwnProperty(j) && cbs[j] === cb) {
              jsTemp.push(j);
            }
          }
          for (i = 0; i < jsTemp.length; i++) {
            j = jsTemp[i];
            delete cbs[j];
          }
        },
        _bind: function(func) {
          var that = this;
          return function() {
            func.apply(that, arguments);
          };
        },
        /** Generate 4 random words, no reseed, no gate.
         * @private
         */
        _gen4words: function() {
          for (var i = 0; i < 4; i++) {
            this._counter[i] = this._counter[i] + 1 | 0;
            if (this._counter[i]) {
              break;
            }
          }
          return this._cipher.encrypt(this._counter);
        },
        /* Rekey the AES instance with itself after a request, or every _MAX_WORDS_PER_BURST words.
         * @private
         */
        _gate: function() {
          this._key = this._gen4words().concat(this._gen4words());
          this._cipher = new sjcl2.cipher.aes(this._key);
        },
        /** Reseed the generator with the given words
         * @private
         */
        _reseed: function(seedWords) {
          this._key = sjcl2.hash.sha256.hash(this._key.concat(seedWords));
          this._cipher = new sjcl2.cipher.aes(this._key);
          for (var i = 0; i < 4; i++) {
            this._counter[i] = this._counter[i] + 1 | 0;
            if (this._counter[i]) {
              break;
            }
          }
        },
        /** reseed the data from the entropy pools
         * @param full If set, use all the entropy pools in the reseed.
         */
        _reseedFromPools: function(full) {
          var reseedData = [], strength = 0, i;
          this._nextReseed = reseedData[0] = (/* @__PURE__ */ new Date()).valueOf() + this._MILLISECONDS_PER_RESEED;
          for (i = 0; i < 16; i++) {
            reseedData.push(Math.random() * 4294967296 | 0);
          }
          for (i = 0; i < this._pools.length; i++) {
            reseedData = reseedData.concat(this._pools[i].finalize());
            strength += this._poolEntropy[i];
            this._poolEntropy[i] = 0;
            if (!full && this._reseedCount & 1 << i) {
              break;
            }
          }
          if (this._reseedCount >= 1 << this._pools.length) {
            this._pools.push(new sjcl2.hash.sha256());
            this._poolEntropy.push(0);
          }
          this._poolStrength -= strength;
          if (strength > this._strength) {
            this._strength = strength;
          }
          this._reseedCount++;
          this._reseed(reseedData);
        },
        _keyboardCollector: function() {
          this._addCurrentTimeToEntropy(1);
        },
        _mouseCollector: function(ev) {
          var x, y;
          try {
            x = ev.x || ev.clientX || ev.offsetX || 0;
            y = ev.y || ev.clientY || ev.offsetY || 0;
          } catch (err) {
            x = 0;
            y = 0;
          }
          if (x != 0 && y != 0) {
            sjcl2.random.addEntropy([x, y], 2, "mouse");
          }
          this._addCurrentTimeToEntropy(0);
        },
        _touchCollector: function(ev) {
          var touch = ev.touches[0] || ev.changedTouches[0];
          var x = touch.pageX || touch.clientX, y = touch.pageY || touch.clientY;
          sjcl2.random.addEntropy([x, y], 1, "touch");
          this._addCurrentTimeToEntropy(0);
        },
        _loadTimeCollector: function() {
          this._addCurrentTimeToEntropy(2);
        },
        _addCurrentTimeToEntropy: function(estimatedEntropy) {
          if (typeof window !== "undefined" && window.performance && typeof window.performance.now === "function") {
            sjcl2.random.addEntropy(window.performance.now(), estimatedEntropy, "loadtime");
          } else {
            sjcl2.random.addEntropy((/* @__PURE__ */ new Date()).valueOf(), estimatedEntropy, "loadtime");
          }
        },
        _accelerometerCollector: function(ev) {
          var ac = ev.accelerationIncludingGravity.x || ev.accelerationIncludingGravity.y || ev.accelerationIncludingGravity.z;
          if (window.orientation) {
            var or = window.orientation;
            if (typeof or === "number") {
              sjcl2.random.addEntropy(or, 1, "accelerometer");
            }
          }
          if (ac) {
            sjcl2.random.addEntropy(ac, 2, "accelerometer");
          }
          this._addCurrentTimeToEntropy(0);
        },
        _fireEvent: function(name, arg) {
          var j, cbs = sjcl2.random._callbacks[name], cbsTemp = [];
          for (j in cbs) {
            if (cbs.hasOwnProperty(j)) {
              cbsTemp.push(cbs[j]);
            }
          }
          for (j = 0; j < cbsTemp.length; j++) {
            cbsTemp[j](arg);
          }
        }
      };
      sjcl2.random = new sjcl2.prng(6);
      (function() {
        function getCryptoModule() {
          try {
            return require_crypto();
          } catch (e) {
            return null;
          }
        }
        try {
          var buf, crypt, ab;
          if (typeof module !== "undefined" && module.exports && (crypt = getCryptoModule()) && crypt.randomBytes) {
            buf = crypt.randomBytes(1024 / 8);
            buf = new Uint32Array(new Uint8Array(buf).buffer);
            sjcl2.random.addEntropy(buf, 1024, "crypto.randomBytes");
          } else if (typeof window !== "undefined" && typeof Uint32Array !== "undefined") {
            ab = new Uint32Array(32);
            if (window.crypto && window.crypto.getRandomValues) {
              window.crypto.getRandomValues(ab);
            } else if (window.msCrypto && window.msCrypto.getRandomValues) {
              window.msCrypto.getRandomValues(ab);
            } else {
              return;
            }
            sjcl2.random.addEntropy(ab, 1024, "crypto.getRandomValues");
          } else {
          }
        } catch (e) {
          if (typeof window !== "undefined" && window.console) {
            console.log("There was an error collecting entropy from the browser:");
            console.log(e);
          }
        }
      })();
      sjcl2.codec.hex = {
        /** Convert from a bitArray to a hex string. */
        fromBits: function(arr) {
          var out = "", i;
          for (i = 0; i < arr.length; i++) {
            out += ((arr[i] | 0) + 263882790666240).toString(16).substr(4);
          }
          return out.substr(0, sjcl2.bitArray.bitLength(arr) / 4);
        },
        /** Convert from a hex string to a bitArray. */
        toBits: function(str) {
          var i, out = [], len;
          str = str.replace(/\s|0x/g, "");
          len = str.length;
          str = str + "00000000";
          for (i = 0; i < str.length; i += 8) {
            out.push(parseInt(str.substr(i, 8), 16) ^ 0);
          }
          return sjcl2.bitArray.clamp(out, len * 4);
        }
      };
      sjcl2.codec.utf8String = {
        /** Convert from a bitArray to a UTF-8 string. */
        fromBits: function(arr) {
          var out = "", bl = sjcl2.bitArray.bitLength(arr), i, tmp;
          for (i = 0; i < bl / 8; i++) {
            if ((i & 3) === 0) {
              tmp = arr[i / 4];
            }
            out += String.fromCharCode(tmp >>> 24);
            tmp <<= 8;
          }
          return decodeURIComponent(escape(out));
        },
        /** Convert from a UTF-8 string to a bitArray. */
        toBits: function(str) {
          str = unescape(encodeURIComponent(str));
          var out = [], i, tmp = 0;
          for (i = 0; i < str.length; i++) {
            tmp = tmp << 8 | str.charCodeAt(i);
            if ((i & 3) === 3) {
              out.push(tmp);
              tmp = 0;
            }
          }
          if (i & 3) {
            out.push(sjcl2.bitArray.partial(8 * (i & 3), tmp));
          }
          return out;
        }
      };
      sjcl2.codec.base64 = {
        /** The base64 alphabet.
         * @private
         */
        _chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        /** Convert from a bitArray to a base64 string. */
        fromBits: function(arr, _noEquals, _url) {
          var out = "", i, bits = 0, c = sjcl2.codec.base64._chars, ta = 0, bl = sjcl2.bitArray.bitLength(arr);
          if (_url) {
            c = c.substr(0, 62) + "-_";
          }
          for (i = 0; out.length * 6 < bl; ) {
            out += c.charAt((ta ^ arr[i] >>> bits) >>> 26);
            if (bits < 6) {
              ta = arr[i] << 6 - bits;
              bits += 26;
              i++;
            } else {
              ta <<= 6;
              bits -= 6;
            }
          }
          while (out.length & 3 && !_noEquals) {
            out += "=";
          }
          return out;
        },
        /** Convert from a base64 string to a bitArray */
        toBits: function(str, _url) {
          str = str.replace(/\s|=/g, "");
          var out = [], i, bits = 0, c = sjcl2.codec.base64._chars, ta = 0, x;
          if (_url) {
            c = c.substr(0, 62) + "-_";
          }
          for (i = 0; i < str.length; i++) {
            x = c.indexOf(str.charAt(i));
            if (x < 0) {
              throw new sjcl2.exception.invalid("this isn't base64!");
            }
            if (bits > 26) {
              bits -= 26;
              out.push(ta ^ x >>> bits);
              ta = x << 32 - bits;
            } else {
              bits += 6;
              ta ^= x << 32 - bits;
            }
          }
          if (bits & 56) {
            out.push(sjcl2.bitArray.partial(bits & 56, ta, 1));
          }
          return out;
        }
      };
      sjcl2.codec.base64url = {
        fromBits: function(arr) {
          return sjcl2.codec.base64.fromBits(arr, 1, 1);
        },
        toBits: function(str) {
          return sjcl2.codec.base64.toBits(str, 1);
        }
      };
      return sjcl2;
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("BigInteger", [], factory);
      } else {
        window.BigInteger = factory();
      }
    })(function() {
      ;
      var dbits;
      var canary = 244837814094590;
      var j_lm = (canary & 16777215) == 15715070;
      function BigInteger2(a2, b, c) {
        if (a2 != null)
          if ("number" == typeof a2) this.fromNumber(a2, b, c);
          else if (b == null && "string" != typeof a2) this.fromString(a2, 256);
          else this.fromString(a2, b);
      }
      function nbi() {
        return new BigInteger2(null);
      }
      function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
          var v = x * this[i++] + w[j] + c;
          c = Math.floor(v / 67108864);
          w[j++] = v & 67108863;
        }
        return c;
      }
      function am2(i, x, w, j, c, n) {
        var xl = x & 32767, xh = x >> 15;
        while (--n >= 0) {
          var l = this[i] & 32767;
          var h = this[i++] >> 15;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823);
          c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
          w[j++] = l & 1073741823;
        }
        return c;
      }
      function am3(i, x, w, j, c, n) {
        var xl = x & 16383, xh = x >> 14;
        while (--n >= 0) {
          var l = this[i] & 16383;
          var h = this[i++] >> 14;
          var m = xh * l + h * xl;
          l = xl * l + ((m & 16383) << 14) + w[j] + c;
          c = (l >> 28) + (m >> 14) + xh * h;
          w[j++] = l & 268435455;
        }
        return c;
      }
      if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
        BigInteger2.prototype.am = am2;
        dbits = 30;
      } else if (j_lm && navigator.appName != "Netscape") {
        BigInteger2.prototype.am = am1;
        dbits = 26;
      } else {
        BigInteger2.prototype.am = am3;
        dbits = 28;
      }
      BigInteger2.prototype.DB = dbits;
      BigInteger2.prototype.DM = (1 << dbits) - 1;
      BigInteger2.prototype.DV = 1 << dbits;
      var BI_FP = 52;
      BigInteger2.prototype.FV = Math.pow(2, BI_FP);
      BigInteger2.prototype.F1 = BI_FP - dbits;
      BigInteger2.prototype.F2 = 2 * dbits - BI_FP;
      var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
      var BI_RC = new Array();
      var rr, vv;
      rr = "0".charCodeAt(0);
      for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
      rr = "a".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
      rr = "A".charCodeAt(0);
      for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
      function int2char(n) {
        return BI_RM.charAt(n);
      }
      function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return c == null ? -1 : c;
      }
      function bnpCopyTo(r) {
        for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
        r.t = this.t;
        r.s = this.s;
      }
      function bnpFromInt(x) {
        this.t = 1;
        this.s = x < 0 ? -1 : 0;
        if (x > 0) this[0] = x;
        else if (x < -1) this[0] = x + DV;
        else this.t = 0;
      }
      function nbv(i) {
        var r = nbi();
        r.fromInt(i);
        return r;
      }
      function bnpFromString(s, b) {
        var k;
        if (b == 16) k = 4;
        else if (b == 8) k = 3;
        else if (b == 256) k = 8;
        else if (b == 2) k = 1;
        else if (b == 32) k = 5;
        else if (b == 4) k = 2;
        else {
          this.fromRadix(s, b);
          return;
        }
        this.t = 0;
        this.s = 0;
        var i = s.length, mi = false, sh = 0;
        while (--i >= 0) {
          var x = k == 8 ? s[i] & 255 : intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-") mi = true;
            continue;
          }
          mi = false;
          if (sh == 0)
            this[this.t++] = x;
          else if (sh + k > this.DB) {
            this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
            this[this.t++] = x >> this.DB - sh;
          } else
            this[this.t - 1] |= x << sh;
          sh += k;
          if (sh >= this.DB) sh -= this.DB;
        }
        if (k == 8 && (s[0] & 128) != 0) {
          this.s = -1;
          if (sh > 0) this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
        }
        this.clamp();
        if (mi) BigInteger2.ZERO.subTo(this, this);
      }
      function bnpClamp() {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c) --this.t;
      }
      function bnToString(b) {
        if (this.s < 0) return "-" + this.negate().toString(b);
        var k;
        if (b == 16) k = 4;
        else if (b == 8) k = 3;
        else if (b == 2) k = 1;
        else if (b == 32) k = 5;
        else if (b == 4) k = 2;
        else return this.toRadix(b);
        var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
        var p = this.DB - i * this.DB % k;
        if (i-- > 0) {
          if (p < this.DB && (d = this[i] >> p) > 0) {
            m = true;
            r = int2char(d);
          }
          while (i >= 0) {
            if (p < k) {
              d = (this[i] & (1 << p) - 1) << k - p;
              d |= this[--i] >> (p += this.DB - k);
            } else {
              d = this[i] >> (p -= k) & km;
              if (p <= 0) {
                p += this.DB;
                --i;
              }
            }
            if (d > 0) m = true;
            if (m) r += int2char(d);
          }
        }
        return m ? r : "0";
      }
      function bnNegate() {
        var r = nbi();
        BigInteger2.ZERO.subTo(this, r);
        return r;
      }
      function bnAbs() {
        return this.s < 0 ? this.negate() : this;
      }
      function bnCompareTo(a2) {
        var r = this.s - a2.s;
        if (r != 0) return r;
        var i = this.t;
        r = i - a2.t;
        if (r != 0) return this.s < 0 ? -r : r;
        while (--i >= 0) if ((r = this[i] - a2[i]) != 0) return r;
        return 0;
      }
      function nbits(x) {
        var r = 1, t;
        if ((t = x >>> 16) != 0) {
          x = t;
          r += 16;
        }
        if ((t = x >> 8) != 0) {
          x = t;
          r += 8;
        }
        if ((t = x >> 4) != 0) {
          x = t;
          r += 4;
        }
        if ((t = x >> 2) != 0) {
          x = t;
          r += 2;
        }
        if ((t = x >> 1) != 0) {
          x = t;
          r += 1;
        }
        return r;
      }
      function bnBitLength() {
        if (this.t <= 0) return 0;
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
      }
      function bnpDLShiftTo(n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
        for (i = n - 1; i >= 0; --i) r[i] = 0;
        r.t = this.t + n;
        r.s = this.s;
      }
      function bnpDRShiftTo(n, r) {
        for (var i = n; i < this.t; ++i) r[i - n] = this[i];
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
      }
      function bnpLShiftTo(n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
        for (i = this.t - 1; i >= 0; --i) {
          r[i + ds + 1] = this[i] >> cbs | c;
          c = (this[i] & bm) << bs;
        }
        for (i = ds - 1; i >= 0; --i) r[i] = 0;
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.clamp();
      }
      function bnpRShiftTo(n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
          r.t = 0;
          return;
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
          r[i - ds - 1] |= (this[i] & bm) << cbs;
          r[i - ds] = this[i] >> bs;
        }
        if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
        r.t = this.t - ds;
        r.clamp();
      }
      function bnpSubTo(a2, r) {
        var i = 0, c = 0, m = Math.min(a2.t, this.t);
        while (i < m) {
          c += this[i] - a2[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }
        if (a2.t < this.t) {
          c -= a2.s;
          while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += this.s;
        } else {
          c += this.s;
          while (i < a2.t) {
            c -= a2[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c -= a2.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c < -1) r[i++] = this.DV + c;
        else if (c > 0) r[i++] = c;
        r.t = i;
        r.clamp();
      }
      function bnpMultiplyTo(a2, r) {
        var x = this.abs(), y = a2.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        r.s = 0;
        r.clamp();
        if (this.s != a2.s) BigInteger2.ZERO.subTo(r, r);
      }
      function bnpSquareTo(r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0) r[i] = 0;
        for (i = 0; i < x.t - 1; ++i) {
          var c = x.am(i, x[i], r, 2 * i, 0, 1);
          if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
            r[i + x.t] -= x.DV;
            r[i + x.t + 1] = 1;
          }
        }
        if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        r.s = 0;
        r.clamp();
      }
      function bnpDivRemTo(m, q, r) {
        var pm = m.abs();
        if (pm.t <= 0) return;
        var pt = this.abs();
        if (pt.t < pm.t) {
          if (q != null) q.fromInt(0);
          if (r != null) this.copyTo(r);
          return;
        }
        if (r == null) r = nbi();
        var y = nbi(), ts = this.s, ms = m.s;
        var nsh = this.DB - nbits(pm[pm.t - 1]);
        if (nsh > 0) {
          pm.lShiftTo(nsh, y);
          pt.lShiftTo(nsh, r);
        } else {
          pm.copyTo(y);
          pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0) return;
        var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
        var i = r.t, j = i - ys, t = q == null ? nbi() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
          r[r.t++] = 1;
          r.subTo(t, r);
        }
        BigInteger2.ONE.dlShiftTo(ys, t);
        t.subTo(y, y);
        while (y.t < ys) y[y.t++] = 0;
        while (--j >= 0) {
          var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
          if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
            y.dlShiftTo(j, t);
            r.subTo(t, r);
            while (r[i] < --qd) r.subTo(t, r);
          }
        }
        if (q != null) {
          r.drShiftTo(ys, q);
          if (ts != ms) BigInteger2.ZERO.subTo(q, q);
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0) r.rShiftTo(nsh, r);
        if (ts < 0) BigInteger2.ZERO.subTo(r, r);
      }
      function bnMod(a2) {
        var r = nbi();
        this.abs().divRemTo(a2, null, r);
        if (this.s < 0 && r.compareTo(BigInteger2.ZERO) > 0) a2.subTo(r, r);
        return r;
      }
      function Classic(m) {
        this.m = m;
      }
      function cConvert(x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
        else return x;
      }
      function cRevert(x) {
        return x;
      }
      function cReduce(x) {
        x.divRemTo(this.m, null, x);
      }
      function cMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      function cSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      Classic.prototype.convert = cConvert;
      Classic.prototype.revert = cRevert;
      Classic.prototype.reduce = cReduce;
      Classic.prototype.mulTo = cMulTo;
      Classic.prototype.sqrTo = cSqrTo;
      function bnpInvDigit() {
        if (this.t < 1) return 0;
        var x = this[0];
        if ((x & 1) == 0) return 0;
        var y = x & 3;
        y = y * (2 - (x & 15) * y) & 15;
        y = y * (2 - (x & 255) * y) & 255;
        y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
        y = y * (2 - x * y % this.DV) % this.DV;
        return y > 0 ? this.DV - y : -y;
      }
      function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << m.DB - 15) - 1;
        this.mt2 = 2 * m.t;
      }
      function montConvert(x) {
        var r = nbi();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger2.ZERO) > 0) this.m.subTo(r, r);
        return r;
      }
      function montRevert(x) {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }
      function montReduce(x) {
        while (x.t <= this.mt2)
          x[x.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
          var j = x[i] & 32767;
          var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
          j = i + this.m.t;
          x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
          while (x[j] >= x.DV) {
            x[j] -= x.DV;
            x[++j]++;
          }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
      }
      function montSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      function montMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      Montgomery.prototype.convert = montConvert;
      Montgomery.prototype.revert = montRevert;
      Montgomery.prototype.reduce = montReduce;
      Montgomery.prototype.mulTo = montMulTo;
      Montgomery.prototype.sqrTo = montSqrTo;
      function bnpIsEven() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0;
      }
      function bnpExp(e, z) {
        if (e > 4294967295 || e < 1) return BigInteger2.ONE;
        var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
          z.sqrTo(r, r2);
          if ((e & 1 << i) > 0) z.mulTo(r2, g, r);
          else {
            var t = r;
            r = r2;
            r2 = t;
          }
        }
        return z.revert(r);
      }
      function bnModPowInt(e, m) {
        var z;
        if (e < 256 || m.isEven()) z = new Classic(m);
        else z = new Montgomery(m);
        return this.exp(e, z);
      }
      BigInteger2.prototype.copyTo = bnpCopyTo;
      BigInteger2.prototype.fromInt = bnpFromInt;
      BigInteger2.prototype.fromString = bnpFromString;
      BigInteger2.prototype.clamp = bnpClamp;
      BigInteger2.prototype.dlShiftTo = bnpDLShiftTo;
      BigInteger2.prototype.drShiftTo = bnpDRShiftTo;
      BigInteger2.prototype.lShiftTo = bnpLShiftTo;
      BigInteger2.prototype.rShiftTo = bnpRShiftTo;
      BigInteger2.prototype.subTo = bnpSubTo;
      BigInteger2.prototype.multiplyTo = bnpMultiplyTo;
      BigInteger2.prototype.squareTo = bnpSquareTo;
      BigInteger2.prototype.divRemTo = bnpDivRemTo;
      BigInteger2.prototype.invDigit = bnpInvDigit;
      BigInteger2.prototype.isEven = bnpIsEven;
      BigInteger2.prototype.exp = bnpExp;
      BigInteger2.prototype.toString = bnToString;
      BigInteger2.prototype.negate = bnNegate;
      BigInteger2.prototype.abs = bnAbs;
      BigInteger2.prototype.compareTo = bnCompareTo;
      BigInteger2.prototype.bitLength = bnBitLength;
      BigInteger2.prototype.mod = bnMod;
      BigInteger2.prototype.modPowInt = bnModPowInt;
      BigInteger2.ZERO = nbv(0);
      BigInteger2.ONE = nbv(1);
      function bnClone() {
        var r = nbi();
        this.copyTo(r);
        return r;
      }
      function bnIntValue() {
        if (this.s < 0) {
          if (this.t == 1) return this[0] - this.DV;
          else if (this.t == 0) return -1;
        } else if (this.t == 1) return this[0];
        else if (this.t == 0) return 0;
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
      }
      function bnByteValue() {
        return this.t == 0 ? this.s : this[0] << 24 >> 24;
      }
      function bnShortValue() {
        return this.t == 0 ? this.s : this[0] << 16 >> 16;
      }
      function bnpChunkSize(r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
      }
      function bnSigNum() {
        if (this.s < 0) return -1;
        else if (this.t <= 0 || this.t == 1 && this[0] <= 0) return 0;
        else return 1;
      }
      function bnpToRadix(b) {
        if (b == null) b = 10;
        if (this.signum() == 0 || b < 2 || b > 36) return "0";
        var cs = this.chunkSize(b);
        var a2 = Math.pow(b, cs);
        var d = nbv(a2), y = nbi(), z = nbi(), r = "";
        this.divRemTo(d, y, z);
        while (y.signum() > 0) {
          r = (a2 + z.intValue()).toString(b).substr(1) + r;
          y.divRemTo(d, y, z);
        }
        return z.intValue().toString(b) + r;
      }
      function bnpFromRadix(s, b) {
        this.fromInt(0);
        if (b == null) b = 10;
        var cs = this.chunkSize(b);
        var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
        for (var i = 0; i < s.length; ++i) {
          var x = intAt(s, i);
          if (x < 0) {
            if (s.charAt(i) == "-" && this.signum() == 0) mi = true;
            continue;
          }
          w = b * w + x;
          if (++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w, 0);
            j = 0;
            w = 0;
          }
        }
        if (j > 0) {
          this.dMultiply(Math.pow(b, j));
          this.dAddOffset(w, 0);
        }
        if (mi) BigInteger2.ZERO.subTo(this, this);
      }
      function bnpFromNumber(a2, b, c) {
        if ("number" == typeof b) {
          if (a2 < 2) this.fromInt(1);
          else {
            this.fromNumber(a2, c);
            if (!this.testBit(a2 - 1))
              this.bitwiseTo(BigInteger2.ONE.shiftLeft(a2 - 1), op_or, this);
            if (this.isEven()) this.dAddOffset(1, 0);
            while (!this.isProbablePrime(b)) {
              this.dAddOffset(2, 0);
              if (this.bitLength() > a2) this.subTo(BigInteger2.ONE.shiftLeft(a2 - 1), this);
            }
          }
        } else {
          var x = new Array(), t = a2 & 7;
          x.length = (a2 >> 3) + 1;
          b.nextBytes(x);
          if (t > 0) x[0] &= (1 << t) - 1;
          else x[0] = 0;
          this.fromString(x, 256);
        }
      }
      function bnToByteArray() {
        var i = this.t, r = new Array();
        r[0] = this.s;
        var p = this.DB - i * this.DB % 8, d, k = 0;
        if (i-- > 0) {
          if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
            r[k++] = d | this.s << this.DB - p;
          while (i >= 0) {
            if (p < 8) {
              d = (this[i] & (1 << p) - 1) << 8 - p;
              d |= this[--i] >> (p += this.DB - 8);
            } else {
              d = this[i] >> (p -= 8) & 255;
              if (p <= 0) {
                p += this.DB;
                --i;
              }
            }
            if ((d & 128) != 0) d |= -256;
            if (k == 0 && (this.s & 128) != (d & 128)) ++k;
            if (k > 0 || d != this.s) r[k++] = d;
          }
        }
        return r;
      }
      function bnEquals(a2) {
        return this.compareTo(a2) == 0;
      }
      function bnMin(a2) {
        return this.compareTo(a2) < 0 ? this : a2;
      }
      function bnMax(a2) {
        return this.compareTo(a2) > 0 ? this : a2;
      }
      function bnpBitwiseTo(a2, op, r) {
        var i, f, m = Math.min(a2.t, this.t);
        for (i = 0; i < m; ++i) r[i] = op(this[i], a2[i]);
        if (a2.t < this.t) {
          f = a2.s & this.DM;
          for (i = m; i < this.t; ++i) r[i] = op(this[i], f);
          r.t = this.t;
        } else {
          f = this.s & this.DM;
          for (i = m; i < a2.t; ++i) r[i] = op(f, a2[i]);
          r.t = a2.t;
        }
        r.s = op(this.s, a2.s);
        r.clamp();
      }
      function op_and(x, y) {
        return x & y;
      }
      function bnAnd(a2) {
        var r = nbi();
        this.bitwiseTo(a2, op_and, r);
        return r;
      }
      function op_or(x, y) {
        return x | y;
      }
      function bnOr(a2) {
        var r = nbi();
        this.bitwiseTo(a2, op_or, r);
        return r;
      }
      function op_xor(x, y) {
        return x ^ y;
      }
      function bnXor(a2) {
        var r = nbi();
        this.bitwiseTo(a2, op_xor, r);
        return r;
      }
      function op_andnot(x, y) {
        return x & ~y;
      }
      function bnAndNot(a2) {
        var r = nbi();
        this.bitwiseTo(a2, op_andnot, r);
        return r;
      }
      function bnNot() {
        var r = nbi();
        for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
        r.t = this.t;
        r.s = ~this.s;
        return r;
      }
      function bnShiftLeft(n) {
        var r = nbi();
        if (n < 0) this.rShiftTo(-n, r);
        else this.lShiftTo(n, r);
        return r;
      }
      function bnShiftRight(n) {
        var r = nbi();
        if (n < 0) this.lShiftTo(-n, r);
        else this.rShiftTo(n, r);
        return r;
      }
      function lbit(x) {
        if (x == 0) return -1;
        var r = 0;
        if ((x & 65535) == 0) {
          x >>= 16;
          r += 16;
        }
        if ((x & 255) == 0) {
          x >>= 8;
          r += 8;
        }
        if ((x & 15) == 0) {
          x >>= 4;
          r += 4;
        }
        if ((x & 3) == 0) {
          x >>= 2;
          r += 2;
        }
        if ((x & 1) == 0) ++r;
        return r;
      }
      function bnGetLowestSetBit() {
        for (var i = 0; i < this.t; ++i)
          if (this[i] != 0) return i * this.DB + lbit(this[i]);
        if (this.s < 0) return this.t * this.DB;
        return -1;
      }
      function cbit(x) {
        var r = 0;
        while (x != 0) {
          x &= x - 1;
          ++r;
        }
        return r;
      }
      function bnBitCount() {
        var r = 0, x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
        return r;
      }
      function bnTestBit(n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t) return this.s != 0;
        return (this[j] & 1 << n % this.DB) != 0;
      }
      function bnpChangeBit(n, op) {
        var r = BigInteger2.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r;
      }
      function bnSetBit(n) {
        return this.changeBit(n, op_or);
      }
      function bnClearBit(n) {
        return this.changeBit(n, op_andnot);
      }
      function bnFlipBit(n) {
        return this.changeBit(n, op_xor);
      }
      function bnpAddTo(a2, r) {
        var i = 0, c = 0, m = Math.min(a2.t, this.t);
        while (i < m) {
          c += this[i] + a2[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }
        if (a2.t < this.t) {
          c += a2.s;
          while (i < this.t) {
            c += this[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += this.s;
        } else {
          c += this.s;
          while (i < a2.t) {
            c += a2[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
          }
          c += a2.s;
        }
        r.s = c < 0 ? -1 : 0;
        if (c > 0) r[i++] = c;
        else if (c < -1) r[i++] = this.DV + c;
        r.t = i;
        r.clamp();
      }
      function bnAdd(a2) {
        var r = nbi();
        this.addTo(a2, r);
        return r;
      }
      function bnSubtract(a2) {
        var r = nbi();
        this.subTo(a2, r);
        return r;
      }
      function bnMultiply(a2) {
        var r = nbi();
        this.multiplyTo(a2, r);
        return r;
      }
      function bnSquare() {
        var r = nbi();
        this.squareTo(r);
        return r;
      }
      function bnDivide(a2) {
        var r = nbi();
        this.divRemTo(a2, r, null);
        return r;
      }
      function bnRemainder(a2) {
        var r = nbi();
        this.divRemTo(a2, null, r);
        return r;
      }
      function bnDivideAndRemainder(a2) {
        var q = nbi(), r = nbi();
        this.divRemTo(a2, q, r);
        return new Array(q, r);
      }
      function bnpDMultiply(n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
      }
      function bnpDAddOffset(n, w) {
        if (n == 0) return;
        while (this.t <= w) this[this.t++] = 0;
        this[w] += n;
        while (this[w] >= this.DV) {
          this[w] -= this.DV;
          if (++w >= this.t) this[this.t++] = 0;
          ++this[w];
        }
      }
      function NullExp() {
      }
      function nNop(x) {
        return x;
      }
      function nMulTo(x, y, r) {
        x.multiplyTo(y, r);
      }
      function nSqrTo(x, r) {
        x.squareTo(r);
      }
      NullExp.prototype.convert = nNop;
      NullExp.prototype.revert = nNop;
      NullExp.prototype.mulTo = nMulTo;
      NullExp.prototype.sqrTo = nSqrTo;
      function bnPow(e) {
        return this.exp(e, new NullExp());
      }
      function bnpMultiplyLowerTo(a2, n, r) {
        var i = Math.min(this.t + a2.t, n);
        r.s = 0;
        r.t = i;
        while (i > 0) r[--i] = 0;
        var j;
        for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a2[i], r, i, 0, this.t);
        for (j = Math.min(a2.t, n); i < j; ++i) this.am(0, a2[i], r, i, 0, n - i);
        r.clamp();
      }
      function bnpMultiplyUpperTo(a2, n, r) {
        --n;
        var i = r.t = this.t + a2.t - n;
        r.s = 0;
        while (--i >= 0) r[i] = 0;
        for (i = Math.max(n - this.t, 0); i < a2.t; ++i)
          r[this.t + i - n] = this.am(n - i, a2[i], r, 0, 0, this.t + i - n);
        r.clamp();
        r.drShiftTo(1, r);
      }
      function Barrett(m) {
        this.r2 = nbi();
        this.q3 = nbi();
        BigInteger2.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
        this.m = m;
      }
      function barrettConvert(x) {
        if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
        else if (x.compareTo(this.m) < 0) return x;
        else {
          var r = nbi();
          x.copyTo(r);
          this.reduce(r);
          return r;
        }
      }
      function barrettRevert(x) {
        return x;
      }
      function barrettReduce(x) {
        x.drShiftTo(this.m.t - 1, this.r2);
        if (x.t > this.m.t + 1) {
          x.t = this.m.t + 1;
          x.clamp();
        }
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
        x.subTo(this.r2, x);
        while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
      }
      function barrettSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r);
      }
      function barrettMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
      }
      Barrett.prototype.convert = barrettConvert;
      Barrett.prototype.revert = barrettRevert;
      Barrett.prototype.reduce = barrettReduce;
      Barrett.prototype.mulTo = barrettMulTo;
      Barrett.prototype.sqrTo = barrettSqrTo;
      function bnModPow(e, m) {
        var i = e.bitLength(), k, r = nbv(1), z;
        if (i <= 0) return r;
        else if (i < 18) k = 1;
        else if (i < 48) k = 3;
        else if (i < 144) k = 4;
        else if (i < 768) k = 5;
        else k = 6;
        if (i < 8)
          z = new Classic(m);
        else if (m.isEven())
          z = new Barrett(m);
        else
          z = new Montgomery(m);
        var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
        g[1] = z.convert(this);
        if (k > 1) {
          var g2 = nbi();
          z.sqrTo(g[1], g2);
          while (n <= km) {
            g[n] = nbi();
            z.mulTo(g2, g[n - 2], g[n]);
            n += 2;
          }
        }
        var j = e.t - 1, w, is1 = true, r2 = nbi(), t;
        i = nbits(e[j]) - 1;
        while (j >= 0) {
          if (i >= k1) w = e[j] >> i - k1 & km;
          else {
            w = (e[j] & (1 << i + 1) - 1) << k1 - i;
            if (j > 0) w |= e[j - 1] >> this.DB + i - k1;
          }
          n = k;
          while ((w & 1) == 0) {
            w >>= 1;
            --n;
          }
          if ((i -= n) < 0) {
            i += this.DB;
            --j;
          }
          if (is1) {
            g[w].copyTo(r);
            is1 = false;
          } else {
            while (n > 1) {
              z.sqrTo(r, r2);
              z.sqrTo(r2, r);
              n -= 2;
            }
            if (n > 0) z.sqrTo(r, r2);
            else {
              t = r;
              r = r2;
              r2 = t;
            }
            z.mulTo(r2, g[w], r);
          }
          while (j >= 0 && (e[j] & 1 << i) == 0) {
            z.sqrTo(r, r2);
            t = r;
            r = r2;
            r2 = t;
            if (--i < 0) {
              i = this.DB - 1;
              --j;
            }
          }
        }
        return z.revert(r);
      }
      function bnGCD(a2) {
        var x = this.s < 0 ? this.negate() : this.clone();
        var y = a2.s < 0 ? a2.negate() : a2.clone();
        if (x.compareTo(y) < 0) {
          var t = x;
          x = y;
          y = t;
        }
        var i = x.getLowestSetBit(), g = y.getLowestSetBit();
        if (g < 0) return x;
        if (i < g) g = i;
        if (g > 0) {
          x.rShiftTo(g, x);
          y.rShiftTo(g, y);
        }
        while (x.signum() > 0) {
          if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
          if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
          if (x.compareTo(y) >= 0) {
            x.subTo(y, x);
            x.rShiftTo(1, x);
          } else {
            y.subTo(x, y);
            y.rShiftTo(1, y);
          }
        }
        if (g > 0) y.lShiftTo(g, y);
        return y;
      }
      function bnpModInt(n) {
        if (n <= 0) return 0;
        var d = this.DV % n, r = this.s < 0 ? n - 1 : 0;
        if (this.t > 0)
          if (d == 0) r = this[0] % n;
          else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
        return r;
      }
      function bnModInverse(m) {
        var ac = m.isEven();
        if (this.isEven() && ac || m.signum() == 0) return BigInteger2.ZERO;
        var u = m.clone(), v = this.clone();
        var a2 = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
        while (u.signum() != 0) {
          while (u.isEven()) {
            u.rShiftTo(1, u);
            if (ac) {
              if (!a2.isEven() || !b.isEven()) {
                a2.addTo(this, a2);
                b.subTo(m, b);
              }
              a2.rShiftTo(1, a2);
            } else if (!b.isEven()) b.subTo(m, b);
            b.rShiftTo(1, b);
          }
          while (v.isEven()) {
            v.rShiftTo(1, v);
            if (ac) {
              if (!c.isEven() || !d.isEven()) {
                c.addTo(this, c);
                d.subTo(m, d);
              }
              c.rShiftTo(1, c);
            } else if (!d.isEven()) d.subTo(m, d);
            d.rShiftTo(1, d);
          }
          if (u.compareTo(v) >= 0) {
            u.subTo(v, u);
            if (ac) a2.subTo(c, a2);
            b.subTo(d, b);
          } else {
            v.subTo(u, v);
            if (ac) c.subTo(a2, c);
            d.subTo(b, d);
          }
        }
        if (v.compareTo(BigInteger2.ONE) != 0) return BigInteger2.ZERO;
        if (d.compareTo(m) >= 0) return d.subtract(m);
        if (d.signum() < 0) d.addTo(m, d);
        else return d;
        if (d.signum() < 0) return d.add(m);
        else return d;
      }
      var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
      var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
      function bnIsProbablePrime(t) {
        var i, x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
          for (i = 0; i < lowprimes.length; ++i)
            if (x[0] == lowprimes[i]) return true;
          return false;
        }
        if (x.isEven()) return false;
        i = 1;
        while (i < lowprimes.length) {
          var m = lowprimes[i], j = i + 1;
          while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
          m = x.modInt(m);
          while (i < j) if (m % lowprimes[i++] == 0) return false;
        }
        return x.millerRabin(t);
      }
      function bnpMillerRabin(t) {
        var n1 = this.subtract(BigInteger2.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0) return false;
        var r = n1.shiftRight(k);
        t = t + 1 >> 1;
        if (t > lowprimes.length) t = lowprimes.length;
        var a2 = nbi();
        for (var i = 0; i < t; ++i) {
          a2.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
          var y = a2.modPow(r, this);
          if (y.compareTo(BigInteger2.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while (j++ < k && y.compareTo(n1) != 0) {
              y = y.modPowInt(2, this);
              if (y.compareTo(BigInteger2.ONE) == 0) return false;
            }
            if (y.compareTo(n1) != 0) return false;
          }
        }
        return true;
      }
      BigInteger2.prototype.chunkSize = bnpChunkSize;
      BigInteger2.prototype.toRadix = bnpToRadix;
      BigInteger2.prototype.fromRadix = bnpFromRadix;
      BigInteger2.prototype.fromNumber = bnpFromNumber;
      BigInteger2.prototype.bitwiseTo = bnpBitwiseTo;
      BigInteger2.prototype.changeBit = bnpChangeBit;
      BigInteger2.prototype.addTo = bnpAddTo;
      BigInteger2.prototype.dMultiply = bnpDMultiply;
      BigInteger2.prototype.dAddOffset = bnpDAddOffset;
      BigInteger2.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
      BigInteger2.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
      BigInteger2.prototype.modInt = bnpModInt;
      BigInteger2.prototype.millerRabin = bnpMillerRabin;
      BigInteger2.prototype.clone = bnClone;
      BigInteger2.prototype.intValue = bnIntValue;
      BigInteger2.prototype.byteValue = bnByteValue;
      BigInteger2.prototype.shortValue = bnShortValue;
      BigInteger2.prototype.signum = bnSigNum;
      BigInteger2.prototype.toByteArray = bnToByteArray;
      BigInteger2.prototype.equals = bnEquals;
      BigInteger2.prototype.min = bnMin;
      BigInteger2.prototype.max = bnMax;
      BigInteger2.prototype.and = bnAnd;
      BigInteger2.prototype.or = bnOr;
      BigInteger2.prototype.xor = bnXor;
      BigInteger2.prototype.andNot = bnAndNot;
      BigInteger2.prototype.not = bnNot;
      BigInteger2.prototype.shiftLeft = bnShiftLeft;
      BigInteger2.prototype.shiftRight = bnShiftRight;
      BigInteger2.prototype.getLowestSetBit = bnGetLowestSetBit;
      BigInteger2.prototype.bitCount = bnBitCount;
      BigInteger2.prototype.testBit = bnTestBit;
      BigInteger2.prototype.setBit = bnSetBit;
      BigInteger2.prototype.clearBit = bnClearBit;
      BigInteger2.prototype.flipBit = bnFlipBit;
      BigInteger2.prototype.add = bnAdd;
      BigInteger2.prototype.subtract = bnSubtract;
      BigInteger2.prototype.multiply = bnMultiply;
      BigInteger2.prototype.divide = bnDivide;
      BigInteger2.prototype.remainder = bnRemainder;
      BigInteger2.prototype.divideAndRemainder = bnDivideAndRemainder;
      BigInteger2.prototype.modPow = bnModPow;
      BigInteger2.prototype.modInverse = bnModInverse;
      BigInteger2.prototype.pow = bnPow;
      BigInteger2.prototype.gcd = bnGCD;
      BigInteger2.prototype.isProbablePrime = bnIsProbablePrime;
      BigInteger2.prototype.square = bnSquare;
      return BigInteger2;
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("SRPClient", [
          "sha1",
          "sjcl",
          "BigInteger"
        ], factory);
      } else {
        window.SRPClient = factory(sha1, sjcl, BigInteger);
      }
    })(function(sha12, sjcl2, BigInteger2) {
      var SRPClient2 = function(username, password, group, hashFn) {
        if (!username)
          throw "Username cannot be empty.";
        this.username = username;
        this.password = password;
        this.hashFn = hashFn || "sha-1";
        var group = group || 1024;
        var initVal = this.initVals[group];
        this.N = new BigInteger2(initVal.N, 16);
        this.g = new BigInteger2(initVal.g, 16);
        this.gBn = new BigInteger2(initVal.g, 16);
        this.k = this.k();
        this.one = new BigInteger2("1", 16);
        this.two = new BigInteger2("2", 16);
      };
      SRPClient2.prototype = {
        toHexString: function(bi) {
          var hex = bi.toString(16);
          if (hex.length % 2 === 1) {
            hex = "0" + hex;
          }
          return hex;
        },
        padLeft: function(orig, len) {
          if (orig.length > len) return orig;
          var arr = Array(len - orig.length + 1);
          return arr.join("0") + orig;
        },
        bytesToHex: function(bytes) {
          var self2 = this;
          var b = bytes.map(function(x) {
            return self2.padLeft(self2.toHexString(x), 2);
          });
          return b.join("");
        },
        hexToBytes: function(hex) {
          if (hex.length % 2 === 1) throw new Error("hexToBytes can't have a string with an odd number of characters.");
          if (hex.indexOf("0x") === 0) hex = hex.slice(2);
          return hex.match(/../g).map(function(x) {
            return parseInt(x, 16);
          });
        },
        stringToBytes: function(str) {
          var bytes = [];
          for (var i = 0; i < str.length; ++i) {
            bytes.push(str.charCodeAt(i));
          }
          return bytes;
        },
        bytesToString: function(byteArr) {
          var str = "";
          for (var i = 0; i < byteArr.length; i++)
            str += String.fromCharCode(byteArr[i]);
          return str;
        },
        /*
        * Calculate k = H(N || g), which is used
        * throughout various SRP calculations.
        */
        k: function() {
          var toHash = [
            this.toHexString(this.N),
            this.toHexString(this.g)
          ];
          return this.paddedHash(toHash);
        },
        /*
        * Calculate x = SHA1(s | SHA1(I | ":" | P))
        */
        calculateX: function(saltHex) {
          if (!saltHex) throw "Missing parameter.";
          if (!this.username || !this.password)
            throw "Username and password cannot be empty.";
          var usernameBytes = this.stringToBytes(this.username);
          var passwordBytes = this.hexToBytes(this.password);
          var upBytes = usernameBytes.concat([58]).concat(passwordBytes);
          var upHash = this.hash(this.bytesToString(upBytes));
          var upHashBytes = this.hexToBytes(upHash);
          var saltBytes = this.hexToBytes(saltHex);
          var saltUpBytes = saltBytes.concat(upHashBytes);
          var saltUpHash = this.hash(this.bytesToString(saltUpBytes));
          var xtmp = new BigInteger2(saltUpHash, 16);
          if (xtmp.compareTo(this.N) < 0) {
            return xtmp;
          } else {
            var one = new BigInteger2(1, 16);
            return xtmp.mod(this.N.subtract(one));
          }
        },
        /*
        * Calculate v = g^x % N
        */
        calculateV: function(salt) {
          if (!salt) throw "Missing parameter.";
          var x = this.calculateX(salt);
          return this.g.modPow(x, this.N);
        },
        /*
        * Calculate u = SHA1(PAD(A) | PAD(B)), which serves
        * to prevent an attacker who learns a user's verifier
        * from being able to authenticate as that user.
        */
        calculateU: function(A, B) {
          if (!A || !B) throw "Missing parameter(s).";
          if (A.mod(this.N).toString() == "0" || B.mod(this.N).toString() == "0")
            throw "ABORT: illegal_parameter";
          var toHash = [this.toHexString(A), this.toHexString(B)];
          return this.paddedHash(toHash);
        },
        canCalculateA: function(a2) {
          if (!a2) throw "Missing parameter.";
          return Math.ceil(a2.bitLength() / 8) >= 256 / 8;
        },
        /*
        * 2.5.4 Calculate the client's public value A = g^a % N,
        * where a is a random number at least 256 bits in length.
        */
        calculateA: function(a2) {
          if (!a2) throw "Missing parameter.";
          if (!this.canCalculateA(a2))
            throw "Client key length is less than 256 bits.";
          var A = this.g.modPow(a2, this.N);
          if (A.mod(this.N).toString() == "0")
            throw "ABORT: illegal_parameter";
          return A;
        },
        /*
        * Calculate match M = H(H(N) XOR H(g) | H(username) | s | A | B | K)
        */
        calculateM1: function(A, B, K, salt) {
          if (!A || !B || !K || !salt)
            throw "Missing parameter(s).";
          if (A.mod(this.N).toString() == "0" || B.mod(this.N).toString() == "0")
            throw "ABORT: illegal_parameter";
          var hashN = this.hexHash(this.toHexString(this.N));
          var hashg = this.hexHash(this.toHexString(this.g));
          var hashUsername = this.hash(this.username);
          var xorNg_bytes = [], hashN_bytes = this.hexToBytes(hashN), hashg_bytes = this.hexToBytes(hashg);
          for (var i = 0; i < hashN_bytes.length; i++)
            xorNg_bytes[i] = hashN_bytes[i] ^ hashg_bytes[i];
          var xorNg = this.bytesToHex(xorNg_bytes);
          var aHex = this.toHexString(A);
          var bHex = this.toHexString(B);
          var toHash = [xorNg, hashUsername, salt, aHex, bHex, K];
          var toHash_str = "";
          for (var j = 0; j < toHash.length; j++) {
            toHash_str += toHash[j];
          }
          return new BigInteger2(this.hexHash(toHash_str), 16);
        },
        /*
        * Calculate match M = H(H(N) XOR H(g) | H(username) | s | A | B | K) and return as hex string
        */
        calculateM: function(A, B, K, salt) {
          if (!A || !B || !K || !salt)
            throw "Missing parameter(s).";
          if (A.mod(this.N).toString() == "0" || B.mod(this.N).toString() == "0")
            throw "ABORT: illegal_parameter";
          var hashN = this.hexHash(this.toHexString(this.N));
          var hashg = this.hexHash(this.toHexString(this.g));
          var hashUsername = this.hash(this.username);
          var xorNg_bytes = [], hashN_bytes = this.hexToBytes(hashN), hashg_bytes = this.hexToBytes(hashg);
          for (var i = 0; i < hashN_bytes.length; i++)
            xorNg_bytes[i] = hashN_bytes[i] ^ hashg_bytes[i];
          var xorNg = this.bytesToHex(xorNg_bytes);
          var aHex = this.toHexString(A);
          var bHex = this.toHexString(B);
          var toHash = [xorNg, hashUsername, salt, aHex, bHex, K];
          var toHash_str = "";
          for (var j = 0; j < toHash.length; j++) {
            toHash_str += toHash[j];
          }
          return this.hexHash(toHash_str);
        },
        /*
        * Calculate match M = H(A, B, K) or M = H(A, M, K)
        */
        calculateM2: function(A, B_or_M, K) {
          if (!A || !B_or_M || !K)
            throw "Missing parameter(s).";
          if (A.mod(this.N).toString() == "0" || B_or_M.mod(this.N).toString() == "0")
            throw "ABORT: illegal_parameter";
          var aHex = this.toHexString(A);
          var bHex = this.toHexString(B_or_M);
          var toHash = [aHex, bHex, K];
          var toHash_str = "";
          for (var j = 0; j < toHash.length; j++) {
            toHash_str += toHash[j];
          }
          return new BigInteger2(this.hexHash(toHash_str), 16);
        },
        /*
        * Calculate the client's premaster secret 
        * S = (B - (k * g^x)) ^ (a + (u * x)) % N
        */
        calculateS: function(B, salt, uu, aa) {
          if (!B || !salt || !uu || !aa)
            throw "Missing parameters.";
          if (B.mod(this.N).toString() == "0")
            throw "ABORT: illegal_parameter";
          var x = this.calculateX(salt);
          var bx = this.g.modPow(x, this.N);
          var btmp = B.add(this.N.multiply(this.k)).subtract(bx.multiply(this.k)).mod(this.N);
          return btmp.modPow(x.multiply(uu).add(aa), this.N);
        },
        calculateK: function(S) {
          return this.hexHash(this.toHexString(S));
        },
        /*
        * Helper functions for random number
        * generation and format conversion.
        */
        /* Generate a random big integer */
        srpRandom: function() {
          var words = sjcl2.random.randomWords(8, 0);
          var hex = sjcl2.codec.hex.fromBits(words);
          if (hex.length != 64)
            throw "Invalid random number size.";
          var r = new BigInteger2(hex, 16);
          if (r.compareTo(this.N) >= 0)
            r = a.mod(this.N.subtract(this.one));
          if (r.compareTo(this.two) < 0)
            r = two;
          return r;
        },
        /* Return a random hexadecimal salt */
        randomHexSalt: function() {
          var words = sjcl2.random.randomWords(8, 0);
          var hex = sjcl2.codec.hex.fromBits(words);
          return hex;
        },
        /*
        * Helper functions for hasing/padding.
        */
        /*
        * SHA1 hashing function with padding: input 
        * is prefixed with 0 to meet N hex width.
        */
        paddedHash: function(array) {
          var nlen = 2 * (this.toHexString(this.N).length * 4 + 7 >> 3);
          var toHash = "";
          for (var i = 0; i < array.length; i++) {
            toHash += this.nZeros(nlen - array[i].length) + array[i];
          }
          var hash = new BigInteger2(this.hexHash(toHash), 16);
          return hash.mod(this.N);
        },
        /* 
        * Generic hashing function.
        */
        hash: function(str) {
          switch (this.hashFn.toLowerCase()) {
            case "sha-256":
              var s = sjcl2.codec.hex.fromBits(
                sjcl2.hash.sha256.hash(str)
              );
              return this.nZeros(64 - s.length) + s;
            case "sha-1":
            default:
              return sha12.calcSHA1(str);
          }
        },
        /*
        * Hexadecimal hashing function.
        */
        hexHash: function(str) {
          switch (this.hashFn.toLowerCase()) {
            case "sha-256":
              var s = sjcl2.codec.hex.fromBits(
                sjcl2.hash.sha256.hash(
                  sjcl2.codec.hex.toBits(str)
                )
              );
              return this.nZeros(64 - s.length) + s;
            case "sha-1":
            default:
              return this.hash(this.pack(str));
          }
        },
        /*
        * Hex to string conversion.
        */
        pack: function(hex) {
          if (hex.length % 2 != 0) hex = "0" + hex;
          var i = 0;
          var ascii = "";
          while (i < hex.length / 2) {
            ascii = ascii + String.fromCharCode(
              parseInt(hex.substr(i * 2, 2), 16)
            );
            i++;
          }
          return ascii;
        },
        /* Return a string with N zeros. */
        nZeros: function(n) {
          if (n < 1) return "";
          var t = this.nZeros(n >> 1);
          return (n & 1) == 0 ? t + t : t + t + "0";
        },
        /*
        * SRP group parameters, composed of N (hexadecimal
        * prime value) and g (decimal group generator).
        * See http://tools.ietf.org/html/rfc5054#appendix-A
        */
        initVals: {
          1024: {
            N: "EEAF0AB9ADB38DD69C33F80AFA8FC5E86072618775FF3C0B9EA2314C9C256576D674DF7496EA81D3383B4813D692C6E0E0D5D8E250B98BE48E495C1D6089DAD15DC7D7B46154D6B6CE8EF4AD69B15D4982559B297BCF1885C529F566660E57EC68EDBC3C05726CC02FD4CBF4976EAA9AFD5138FE8376435B9FC61D2FC0EB06E3",
            g: "2"
          },
          1536: {
            N: "9DEF3CAFB939277AB1F12A8617A47BBBDBA51DF499AC4C80BEEEA9614B19CC4D5F4F5F556E27CBDE51C6A94BE4607A291558903BA0D0F84380B655BB9A22E8DCDF028A7CEC67F0D08134B1C8B97989149B609E0BE3BAB63D47548381DBC5B1FC764E3F4B53DD9DA1158BFD3E2B9C8CF56EDF019539349627DB2FD53D24B7C48665772E437D6C7F8CE442734AF7CCB7AE837C264AE3A9BEB87F8A2FE9B8B5292E5A021FFF5E91479E8CE7A28C2442C6F315180F93499A234DCF76E3FED135F9BB",
            g: "2"
          },
          2048: {
            N: "AC6BDB41324A9A9BF166DE5E1389582FAF72B6651987EE07FC3192943DB56050A37329CBB4A099ED8193E0757767A13DD52312AB4B03310DCD7F48A9DA04FD50E8083969EDB767B0CF6095179A163AB3661A05FBD5FAAAE82918A9962F0B93B855F97993EC975EEAA80D740ADBF4FF747359D041D5C33EA71D281E446B14773BCA97B43A23FB801676BD207A436C6481F1D2B9078717461A5B9D32E688F87748544523B524B0D57D5EA77A2775D2ECFA032CFBDBF52FB3786160279004E57AE6AF874E7303CE53299CCC041C7BC308D82A5698F3A8D0C38271AE35F8E9DBFBB694B5C803D89F7AE435DE236D525F54759B65E372FCD68EF20FA7111F9E4AFF73",
            g: "2"
          },
          3072: {
            N: "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",
            g: "5"
          },
          4096: {
            N: "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A92108011A723C12A787E6D788719A10BDBA5B2699C327186AF4E23C1A946834B6150BDA2583E9CA2AD44CE8DBBBC2DB04DE8EF92E8EFC141FBECAA6287C59474E6BC05D99B2964FA090C3A2233BA186515BE7ED1F612970CEE2D7AFB81BDD762170481CD0069127D5B05AA993B4EA988D8FDDC186FFB7DC90A6C08F4DF435C934063199FFFFFFFFFFFFFFFF",
            g: "5"
          },
          6144: {
            N: "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A92108011A723C12A787E6D788719A10BDBA5B2699C327186AF4E23C1A946834B6150BDA2583E9CA2AD44CE8DBBBC2DB04DE8EF92E8EFC141FBECAA6287C59474E6BC05D99B2964FA090C3A2233BA186515BE7ED1F612970CEE2D7AFB81BDD762170481CD0069127D5B05AA993B4EA988D8FDDC186FFB7DC90A6C08F4DF435C93402849236C3FAB4D27C7026C1D4DCB2602646DEC9751E763DBA37BDF8FF9406AD9E530EE5DB382F413001AEB06A53ED9027D831179727B0865A8918DA3EDBEBCF9B14ED44CE6CBACED4BB1BDB7F1447E6CC254B332051512BD7AF426FB8F401378CD2BF5983CA01C64B92ECF032EA15D1721D03F482D7CE6E74FEF6D55E702F46980C82B5A84031900B1C9E59E7C97FBEC7E8F323A97A7E36CC88BE0F1D45B7FF585AC54BD407B22B4154AACC8F6D7EBF48E1D814CC5ED20F8037E0A79715EEF29BE32806A1D58BB7C5DA76F550AA3D8A1FBFF0EB19CCB1A313D55CDA56C9EC2EF29632387FE8D76E3C0468043E8F663F4860EE12BF2D5B0B7474D6E694F91E6DCC4024FFFFFFFFFFFFFFFF",
            g: "5"
          },
          8192: {
            N: "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A92108011A723C12A787E6D788719A10BDBA5B2699C327186AF4E23C1A946834B6150BDA2583E9CA2AD44CE8DBBBC2DB04DE8EF92E8EFC141FBECAA6287C59474E6BC05D99B2964FA090C3A2233BA186515BE7ED1F612970CEE2D7AFB81BDD762170481CD0069127D5B05AA993B4EA988D8FDDC186FFB7DC90A6C08F4DF435C93402849236C3FAB4D27C7026C1D4DCB2602646DEC9751E763DBA37BDF8FF9406AD9E530EE5DB382F413001AEB06A53ED9027D831179727B0865A8918DA3EDBEBCF9B14ED44CE6CBACED4BB1BDB7F1447E6CC254B332051512BD7AF426FB8F401378CD2BF5983CA01C64B92ECF032EA15D1721D03F482D7CE6E74FEF6D55E702F46980C82B5A84031900B1C9E59E7C97FBEC7E8F323A97A7E36CC88BE0F1D45B7FF585AC54BD407B22B4154AACC8F6D7EBF48E1D814CC5ED20F8037E0A79715EEF29BE32806A1D58BB7C5DA76F550AA3D8A1FBFF0EB19CCB1A313D55CDA56C9EC2EF29632387FE8D76E3C0468043E8F663F4860EE12BF2D5B0B7474D6E694F91E6DBE115974A3926F12FEE5E438777CB6A932DF8CD8BEC4D073B931BA3BC832B68D9DD300741FA7BF8AFC47ED2576F6936BA424663AAB639C5AE4F5683423B4742BF1C978238F16CBE39D652DE3FDB8BEFC848AD922222E04A4037C0713EB57A81A23F0C73473FC646CEA306B4BCBC8862F8385DDFA9D4B7FA2C087E879683303ED5BDD3A062B3CF5B3A278A66D2A13F83F44F82DDF310EE074AB6A364597E899A0255DC164F31CC50846851DF9AB48195DED7EA1B1D510BD7EE74D73FAF36BC31ECFA268359046F4EB879F924009438B481C6CD7889A002ED5EE382BC9190DA6FC026E479558E4475677E9AA9E3050E2765694DFC81F56E880B96E7160C980DD98EDD3DFFFFFFFFFFFFFFFFF",
            g: "19"
          }
        },
        /*
        * Server-side SRP functions. These should not
        * be used on the client except for debugging.
        */
        /* Calculate the server's public value B. */
        calculateB: function(b, v) {
          if (!b || !v) throw "Missing parameters.";
          var bb = this.g.modPow(b, this.N);
          var B = bb.add(v.multiply(this.k)).mod(this.N);
          return B;
        },
        /* Calculate the server's premaster secret */
        calculateServerS: function(A, v, u, B) {
          if (!A || !v || !u || !B)
            throw "Missing parameters.";
          if (A.mod(this.N).toString() == "0" || B.mod(this.N).toString() == "0")
            throw "ABORT: illegal_parameter";
          return v.modPow(u, this.N).multiply(A).mod(this.N).modPow(B, this.N);
        }
      };
      return SRPClient2;
    });
    (function() {
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          return define("ifvisible", function() {
            return factory();
          });
        } else if (typeof exports === "object") {
          return module.exports = factory();
        } else {
          return root.ifvisible = factory();
        }
      })(this, function() {
        var addEvent, customEvent, doc, fireEvent, hidden, idleStartedTime, idleTime, ie, ifvisible2, init, initialized, status, trackIdleStatus, visibilityChange;
        ifvisible2 = {};
        doc = document;
        initialized = false;
        status = "active";
        idleTime = 6e4;
        idleStartedTime = false;
        customEvent = (function() {
          var S4, addCustomEvent, cgid, fireCustomEvent, guid, listeners, removeCustomEvent;
          S4 = function() {
            return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
          };
          guid = function() {
            return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
          };
          listeners = {};
          cgid = "__ceGUID";
          addCustomEvent = function(obj, event, callback) {
            obj[cgid] = void 0;
            if (!obj[cgid]) {
              obj[cgid] = "ifvisible.object.event.identifier";
            }
            if (!listeners[obj[cgid]]) {
              listeners[obj[cgid]] = {};
            }
            if (!listeners[obj[cgid]][event]) {
              listeners[obj[cgid]][event] = [];
            }
            return listeners[obj[cgid]][event].push(callback);
          };
          fireCustomEvent = function(obj, event, memo) {
            var ev, j, len, ref, results;
            if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
              ref = listeners[obj[cgid]][event];
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                ev = ref[j];
                results.push(ev(memo || {}));
              }
              return results;
            }
          };
          removeCustomEvent = function(obj, event, callback) {
            var cl, i, j, len, ref;
            if (callback) {
              if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
                ref = listeners[obj[cgid]][event];
                for (i = j = 0, len = ref.length; j < len; i = ++j) {
                  cl = ref[i];
                  if (cl === callback) {
                    listeners[obj[cgid]][event].splice(i, 1);
                    return cl;
                  }
                }
              }
            } else {
              if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
                return delete listeners[obj[cgid]][event];
              }
            }
          };
          return {
            add: addCustomEvent,
            remove: removeCustomEvent,
            fire: fireCustomEvent
          };
        })();
        addEvent = (function() {
          var setListener;
          setListener = false;
          return function(el, ev, fn) {
            if (!setListener) {
              if (el.addEventListener) {
                setListener = function(el2, ev2, fn2) {
                  return el2.addEventListener(ev2, fn2, false);
                };
              } else if (el.attachEvent) {
                setListener = function(el2, ev2, fn2) {
                  return el2.attachEvent("on" + ev2, fn2, false);
                };
              } else {
                setListener = function(el2, ev2, fn2) {
                  return el2["on" + ev2] = fn2;
                };
              }
            }
            return setListener(el, ev, fn);
          };
        })();
        fireEvent = function(element, event) {
          var evt;
          if (doc.createEventObject) {
            return element.fireEvent("on" + event, evt);
          } else {
            evt = doc.createEvent("HTMLEvents");
            evt.initEvent(event, true, true);
            return !element.dispatchEvent(evt);
          }
        };
        ie = (function() {
          var all, check, div, undef, v;
          undef = void 0;
          v = 3;
          div = doc.createElement("div");
          all = div.getElementsByTagName("i");
          check = function() {
            return div.innerHTML = "<!--[if gt IE " + ++v + "]><i></i><![endif]-->", all[0];
          };
          while (check()) {
            continue;
          }
          if (v > 4) {
            return v;
          } else {
            return undef;
          }
        })();
        hidden = false;
        visibilityChange = void 0;
        if (typeof doc.hidden !== "undefined") {
          hidden = "hidden";
          visibilityChange = "visibilitychange";
        } else if (typeof doc.mozHidden !== "undefined") {
          hidden = "mozHidden";
          visibilityChange = "mozvisibilitychange";
        } else if (typeof doc.msHidden !== "undefined") {
          hidden = "msHidden";
          visibilityChange = "msvisibilitychange";
        } else if (typeof doc.webkitHidden !== "undefined") {
          hidden = "webkitHidden";
          visibilityChange = "webkitvisibilitychange";
        }
        trackIdleStatus = function() {
          var timer, wakeUp;
          timer = false;
          wakeUp = function() {
            clearTimeout(timer);
            if (status !== "active") {
              ifvisible2.wakeup();
            }
            idleStartedTime = +/* @__PURE__ */ new Date();
            return timer = setTimeout(function() {
              if (status === "active") {
                return ifvisible2.idle();
              }
            }, idleTime);
          };
          wakeUp();
          addEvent(doc, "mousemove", wakeUp);
          addEvent(doc, "keyup", wakeUp);
          addEvent(window, "scroll", wakeUp);
          ifvisible2.focus(wakeUp);
          return ifvisible2.wakeup(wakeUp);
        };
        init = function() {
          var blur;
          if (initialized) {
            return true;
          }
          if (hidden === false) {
            blur = "blur";
            if (ie < 9) {
              blur = "focusout";
            }
            addEvent(window, blur, function() {
              return ifvisible2.blur();
            });
            addEvent(window, "focus", function() {
              return ifvisible2.focus();
            });
          } else {
            addEvent(doc, visibilityChange, function() {
              if (doc[hidden]) {
                return ifvisible2.blur();
              } else {
                return ifvisible2.focus();
              }
            }, false);
          }
          initialized = true;
          return trackIdleStatus();
        };
        ifvisible2 = {
          setIdleDuration: function(seconds) {
            return idleTime = seconds * 1e3;
          },
          getIdleDuration: function() {
            return idleTime;
          },
          getIdleInfo: function() {
            var now, res;
            now = +/* @__PURE__ */ new Date();
            res = {};
            if (status === "idle") {
              res.isIdle = true;
              res.idleFor = now - idleStartedTime;
              res.timeLeft = 0;
              res.timeLeftPer = 100;
            } else {
              res.isIdle = false;
              res.idleFor = now - idleStartedTime;
              res.timeLeft = idleStartedTime + idleTime - now;
              res.timeLeftPer = (100 - res.timeLeft * 100 / idleTime).toFixed(2);
            }
            return res;
          },
          focus: function(callback) {
            if (typeof callback === "function") {
              return this.on("focus", callback);
            }
            status = "active";
            customEvent.fire(this, "focus");
            customEvent.fire(this, "wakeup");
            return customEvent.fire(this, "statusChanged", {
              status
            });
          },
          blur: function(callback) {
            if (typeof callback === "function") {
              return this.on("blur", callback);
            }
            status = "hidden";
            customEvent.fire(this, "blur");
            customEvent.fire(this, "idle");
            return customEvent.fire(this, "statusChanged", {
              status
            });
          },
          idle: function(callback) {
            if (typeof callback === "function") {
              return this.on("idle", callback);
            }
            status = "idle";
            customEvent.fire(this, "idle");
            return customEvent.fire(this, "statusChanged", {
              status
            });
          },
          wakeup: function(callback) {
            if (typeof callback === "function") {
              return this.on("wakeup", callback);
            }
            status = "active";
            customEvent.fire(this, "wakeup");
            return customEvent.fire(this, "statusChanged", {
              status
            });
          },
          on: function(name, callback) {
            init();
            return customEvent.add(this, name, callback);
          },
          off: function(name, callback) {
            init();
            return customEvent.remove(this, name, callback);
          },
          onEvery: function(seconds, callback) {
            var paused, t;
            init();
            paused = false;
            if (callback) {
              t = setInterval(function() {
                if (status === "active" && paused === false) {
                  return callback();
                }
              }, seconds * 1e3);
            }
            return {
              stop: function() {
                return clearInterval(t);
              },
              pause: function() {
                return paused = true;
              },
              resume: function() {
                return paused = false;
              },
              code: t,
              callback
            };
          },
          now: function(check) {
            init();
            return status === (check || "active");
          }
        };
        return ifvisible2;
      });
    }).call(exports);
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("WebSdkCore", [], factory);
      } else {
        window.WebSdkCore = factory();
      }
    })(function() {
      var WebSdk2 = {
        Promise: null,
        // allows passing custom implementation of promises,
        debug: false,
        // if true browser console will be used to output debug messages
        version: 4
      };
      var WebSdkEncryptionSupport = {
        None: 1,
        Encoding: 2,
        Encryption: 3,
        AESEncryption: 4
      };
      var WebSdkDataSupport = {
        Binary: 1,
        String: 2
      };
      var core = {
        WebSdk: WebSdk2,
        WebSdkEncryptionSupport,
        WebSdkDataSupport
      };
      core.log = function() {
        if (!core.WebSdk.debug) return;
        if (console.log.apply)
          console.log.apply(console, [].slice.call(arguments));
        else
          console.log(arguments[0]);
      };
      return core;
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("WebSdkCore.utils", [
          "WebSdkCore"
        ], factory);
      } else {
        if (!window.WebSdkCore)
          throw new Error("WebSdkCore is not loaded.");
        window.WebSdkCore.utils = factory(window.WebSdkCore);
      }
    })(function(core) {
      function getQueryParam(url, name) {
        var match = RegExp("[?&]" + name + "=([^&]*)").exec(url);
        return match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : null;
      }
      function ajax(method, url, data) {
        var promise = new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url, true);
          xhr.responseType = "json";
          xhr.setRequestHeader("Accept", "application/json");
          xhr.onreadystatechange = function onreadystatechange() {
            if (this.readyState === XMLHttpRequest.DONE) {
              if (this.status === 200) {
                var data2;
                if (this.responseType === "" && typeof this.responseText === "string")
                  data2 = JSON.parse(this.responseText);
                else
                  data2 = this.response;
                resolve(data2);
              } else {
                reject(this);
              }
            }
          };
          if (method.toLowerCase() === "post" && data) {
            var urlEncodedData = "";
            var urlEncodedDataPairs = [];
            var name;
            for (name in data) {
              urlEncodedDataPairs.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
            }
            urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");
            xhr.send(urlEncodedData);
          } else {
            xhr.send();
          }
        });
        return promise;
      }
      function defer(deferred) {
        deferred.promise = new Promise(function(resolve, reject) {
          deferred.resolve = resolve;
          deferred.reject = reject;
        });
        return deferred;
      }
      function Deferred() {
        if (this instanceof Deferred) return defer(this);
        else return defer(Object.create(Deferred.prototype));
      }
      function tryParseJson(str) {
        if (!str)
          return null;
        var obj;
        try {
          obj = JSON.parse(str);
        } catch (e) {
          obj = null;
        }
        return obj;
      }
      var FixedQueue = (function() {
        function FixedQueue2(maxSize) {
          this.m_items = [];
          this.m_maxSize = maxSize;
        }
        Object.defineProperty(FixedQueue2.prototype, "length", {
          get: function() {
            return this.m_items.length;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(FixedQueue2.prototype, "items", {
          get: function() {
            return this.m_items;
          },
          enumerable: true,
          configurable: true
        });
        FixedQueue2.prototype.trimHead = function() {
          if (this.m_items.length <= this.m_maxSize)
            return;
          Array.prototype.splice.call(this.m_items, 0, this.m_items.length - this.m_maxSize);
        };
        FixedQueue2.prototype.trimTail = function() {
          if (this.m_items.length <= this.m_maxSize)
            return;
          Array.prototype.splice.call(this.m_items, this.m_maxSize, this.m_items.length - this.m_maxSize);
        };
        FixedQueue2.prototype.push = function() {
          var result = Array.prototype.push.apply(this.m_items, arguments);
          this.trimHead();
          return result;
        };
        FixedQueue2.prototype.splice = function() {
          var result = Array.prototype.splice.apply(this.m_items, arguments);
          this.trimTail();
          return result;
        };
        FixedQueue2.prototype.unshift = function() {
          var result = Array.prototype.unshift.apply(this.m_items, arguments);
          this.trimTail();
          return result;
        };
        return FixedQueue2;
      })();
      return {
        getQueryParam,
        ajax,
        tryParseJson,
        Deferred,
        FixedQueue
      };
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("WebSdkCore.configurator", [
          "WebSdkCore",
          "WebSdkCore.utils"
        ], factory);
      } else {
        if (!window.WebSdkCore)
          throw new Error("WebSdkCore is not loaded.");
        window.WebSdkCore.configurator = factory(window.WebSdkCore, window.WebSdkCore.utils);
      }
    })(function(core, utils) {
      function Configurator() {
        this.m_key = "websdk";
        var sessionData = utils.tryParseJson(sessionStorage.getItem(this.m_key));
        if (sessionData) {
          this.m_port = parseInt(sessionData.port);
          this.m_host = sessionData.host || "127.0.0.1";
          this.m_isSecure = sessionData.isSecure;
          this.m_srp = sessionData.srp;
        }
      }
      Object.defineProperty(Configurator.prototype, "url", {
        get: function() {
          if (!this.m_port || !this.m_host) return null;
          var protocol = this.m_isSecure ? "https" : "http";
          return protocol + "://" + this.m_host + ":" + this.m_port.toString();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Configurator.prototype, "srp", {
        get: function() {
          return this.m_srp;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Configurator.prototype, "sessionId", {
        get: function() {
          return sessionStorage.getItem("websdk.sessionId");
        },
        set: function(value2) {
          return sessionStorage.setItem("websdk.sessionId", value2);
        },
        enumerable: true,
        configurable: true
      });
      Configurator.prototype.ensureLoaded = function(callback) {
        core.log("Configurator: ensureLoaded");
        if (!!this.url && !!this.srp) return callback(null);
        var self2 = this, uri = "https://127.0.0.1:52181/get_connection";
        utils.ajax("get", uri).then(function(response) {
          core.log("Configurator: findConfiguration -> ", response);
          if (response && response.endpoint && self2.tryParse(response.endpoint)) {
            callback(null);
          } else {
            callback(new Error("Cannot load configuration"));
          }
        }).catch(function(err) {
          core.log("Configurator: findConfiguration -> ERROR ", err);
          callback(err);
        });
      };
      Configurator.prototype.tryParse = function(connectionString) {
        core.log("Configurator: tryParse " + connectionString);
        var urlEl = document.createElement("a");
        urlEl.href = connectionString;
        var port = parseInt(utils.getQueryParam(urlEl.search, "web_sdk_port") || ""), isSecure = utils.getQueryParam(urlEl.search, "web_sdk_secure") == "true", host = urlEl.hostname;
        var p1 = utils.getQueryParam(urlEl.search, "web_sdk_username"), p2 = utils.getQueryParam(urlEl.search, "web_sdk_password"), salt = utils.getQueryParam(urlEl.search, "web_sdk_salt");
        if (!port || !host || !p1 || !p2 || !salt) return false;
        this.m_port = port;
        this.m_host = host;
        this.m_isSecure = isSecure;
        this.m_srp = {
          p1,
          p2,
          salt
        };
        sessionStorage.setItem(this.m_key, JSON.stringify({
          port: this.m_port,
          host: this.m_host,
          isSecure: this.m_isSecure,
          srp: this.m_srp
        }));
        return true;
      };
      return new Configurator();
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("WebSdkCore.cipher", [
          "WebSdkCore"
        ], factory);
      } else {
        if (!window.WebSdkCore)
          throw new Error("WebSdkCore is not loaded.");
        window.WebSdkCore.cipher = factory(window.WebSdkCore);
      }
    })(function(core) {
      var WebSdkAESVersion = 1;
      var WebSdkAESDataType = {
        Binary: 1,
        UnicodeString: 2,
        UTF8String: 3
      };
      var crypt = window.crypto || window.msCrypto;
      function utf8ToBase64(str) {
        var binstr = utf8ToBinaryString(str);
        return btoa(binstr);
      }
      function base64ToUtf8(b64) {
        var binstr = atob(b64);
        return binaryStringToUtf8(binstr);
      }
      function utf8ToBinaryString(str) {
        var escstr = encodeURIComponent(str);
        var binstr = escstr.replace(/%([0-9A-F]{2})/g, function(match, p1) {
          return String.fromCharCode(parseInt(p1, 16));
        });
        return binstr;
      }
      function binaryStringToUtf8(binstr) {
        var escstr = binstr.replace(/(.)/g, function(m, p) {
          var code = p.charCodeAt(0).toString(16).toUpperCase();
          if (code.length < 2) {
            code = "0" + code;
          }
          return "%" + code;
        });
        return decodeURIComponent(escstr);
      }
      function keyCharAt(key, i) {
        return key.charCodeAt(Math.floor(i % key.length));
      }
      function xor(key, data) {
        var strArr = Array.prototype.map.call(data, function(x) {
          return x;
        });
        return strArr.map(function(c, i) {
          return String.fromCharCode(c.charCodeAt(0) ^ keyCharAt(key, i));
        }).join("");
      }
      function getHdr(buf) {
        var dv = new DataView(buf);
        var version = dv.getUint8(0);
        var type = dv.getUint8(1);
        var length = dv.getUint32(2, true);
        var offset = dv.getUint16(6, true);
        return { version, type, length, offset };
      }
      function setHdr(buf, type) {
        var dv = new DataView(buf);
        dv.setUint8(0, WebSdkAESVersion);
        dv.setUint8(1, type);
        dv.setUint32(2, buf.byteLength - 8, true);
        dv.setUint16(6, 8, true);
      }
      function ab2str(buf) {
        return new Promise(function(resolve, reject) {
          var blob = new Blob([new Uint8Array(buf)]);
          var fileReader = new FileReader();
          fileReader.onload = function(event) {
            return resolve(event.target.result);
          };
          fileReader.onerror = function(event) {
            return reject(event.target.error);
          };
          fileReader.readAsText(blob, "utf-16");
        });
      }
      function str2ab(str) {
        var buf = new ArrayBuffer(str.length * 2 + 8);
        setHdr(buf, WebSdkAESDataType.UnicodeString);
        var bufView = new Uint16Array(buf, 8);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
          bufView[i] = str.charCodeAt(i);
        }
        return buf;
      }
      function binary2ab(bin) {
        var buf = new ArrayBuffer(bin.length + 8);
        setHdr(buf, WebSdkAESDataType.Binary);
        var bufSrc = new Uint8Array(bin);
        var bufDest = new Uint8Array(buf, 8);
        bufDest.set(bufSrc);
        return buf;
      }
      function generateKey(rawKey) {
        var usages = ["encrypt", "decrypt"];
        var extractable = false;
        return crypt.subtle.importKey(
          "raw",
          rawKey,
          { name: "AES-CBC" },
          extractable,
          usages
        );
      }
      function encrypt(data, key, iv) {
        return crypt.subtle.encrypt(
          { name: "AES-CBC", iv },
          key,
          data
        );
      }
      ;
      function decrypt(data, key, iv) {
        return crypt.subtle.decrypt(
          { name: "AES-CBC", iv },
          key,
          data
        );
      }
      ;
      function msGenerateKey(rawKey) {
        var usages = ["encrypt", "decrypt"];
        var extractable = false;
        return new Promise(function(resolve, reject) {
          var keyOpp = crypt.subtle.importKey(
            "raw",
            rawKey,
            { name: "AES-CBC" },
            extractable,
            usages
          );
          keyOpp.oncomplete = function(e) {
            resolve(keyOpp.result);
          };
          keyOpp.onerror = function(e) {
            reject(new Error("Cannot create a key..."));
          };
        });
      }
      function msEncrypt(data, key, iv) {
        return new Promise(function(resolve, reject) {
          var encOpp = crypt.subtle.encrypt(
            { name: "AES-CBC", iv },
            key,
            data
          );
          encOpp.oncomplete = function(e) {
            resolve(encOpp.result);
          };
          encOpp.onerror = function(e) {
            reject(new Error("Fail to encrypt data..."));
          };
        });
      }
      function msDecrypt(data, key, iv) {
        return new Promise(function(resolve, reject) {
          var decOpp = crypt.subtle.decrypt(
            { name: "AES-CBC", iv },
            key,
            data
          );
          decOpp.oncomplete = function(e) {
            resolve(decOpp.result);
          };
          decOpp.onerror = function(e) {
            reject(new Error("Fail to encrypt data..."));
          };
        });
      }
      function encryptAES(data, key, iv) {
        if (typeof window.crypto !== "undefined") {
          return generateKey(key).then(function(key2) {
            return encrypt(data, key2, iv);
          });
        } else {
          return msGenerateKey(key).then(function(key2) {
            return msEncrypt(data, key2, iv);
          });
        }
      }
      ;
      function decryptAES(data, key, iv) {
        if (typeof window.crypto !== "undefined") {
          return generateKey(key).then(function(key2) {
            return decrypt(data, key2, iv);
          });
        } else {
          return msGenerateKey(key).then(function(key2) {
            return msDecrypt(data, key2, iv);
          });
        }
      }
      ;
      function hexToArray(hex) {
        if (hex.length % 2 === 1) throw new Error("hexToBytes can't have a string with an odd number of characters.");
        if (hex.indexOf("0x") === 0) hex = hex.slice(2);
        return new Uint8Array(hex.match(/../g).map(function(x) {
          return parseInt(x, 16);
        }));
      }
      ;
      function promisefy(data) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(data);
          });
        });
      }
      function AESEncryption(key, M1, data) {
        var iv = new Uint8Array(hexToArray(M1).buffer, 0, 16);
        var buff;
        if (typeof data === "string")
          buff = str2ab(data);
        else
          buff = binary2ab(data);
        return encryptAES(buff, key, iv);
      }
      function AESDecryption(key, M1, data) {
        var iv = new Uint8Array(hexToArray(M1).buffer, 0, 16);
        return decryptAES(data, key, iv).then(function(data2) {
          var hdr = getHdr(data2);
          if (hdr.version !== WebSdkAESVersion)
            throw new Error("Invalid data version!");
          switch (hdr.type) {
            case WebSdkAESDataType.Binary:
              return data2.slice(hdr.offset);
            case WebSdkAESDataType.UnicodeString:
              return ab2str(data2.slice(hdr.offset));
            default:
              throw new Error("Invalid data type!");
          }
          return ab2str(data2);
        });
      }
      return {
        encode: function(key, M1, data) {
          switch (core.WebSdk.version) {
            case core.WebSdkEncryptionSupport.AESEncryption:
              return AESEncryption(key, M1, data);
            case core.WebSdkEncryptionSupport.Encryption:
              return promisefy(utf8ToBase64(xor(M1, data)));
            case core.WebSdkEncryptionSupport.Encoding:
              return promisefy(utf8ToBase64(data));
            default:
              return promisefy(data);
          }
        },
        decode: function(key, M1, data) {
          switch (core.WebSdk.version) {
            case core.WebSdkEncryptionSupport.AESEncryption:
              return AESDecryption(key, M1, data);
            case core.WebSdkEncryptionSupport.Encryption:
              return promisefy(xor(M1, base64ToUtf8(data)));
            case core.WebSdkEncryptionSupport.Encoding:
              return promisefy(base64ToUtf8(data));
            default:
              return promisefy(data);
          }
        },
        isCryptoSupported: function() {
          return typeof crypt !== "undefined" && crypt.subtle && crypt.subtle.importKey && crypt.subtle.encrypt;
        },
        hexToBytes: function(hex) {
          return hexToArray(hex);
        }
      };
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("WebSdkCore.channelOptions", [
          "WebSdkCore"
        ], factory);
      } else {
        var core = window.WebSdkCore;
        if (!core)
          throw new Error("WebSdkCore is not loaded.");
        window.WebSdkCore.channelOptions = factory(core);
      }
    })(function(core) {
      function WebChannelOptions(options) {
        if (!options) options = {};
        var version = core.WebSdkEncryptionSupport.AESEncryption, debug = options.debug === true;
        if (!!options.version) {
          validateVersion(options.version);
          version = options.version;
        }
        Object.defineProperties(this, {
          "version": {
            get: function() {
              return version;
            },
            set: function(value2) {
              validateVersion(value2);
              version = value2;
            },
            enumerable: true
          },
          "debug": {
            get: function() {
              return debug;
            },
            set: function() {
              debug = value;
            },
            enumerable: true
          }
        });
        function validateVersion(v) {
          for (var supportedVersion in core.WebSdkEncryptionSupport) {
            if (core.WebSdkEncryptionSupport.hasOwnProperty(supportedVersion) && core.WebSdkEncryptionSupport[supportedVersion] === v)
              return;
          }
          throw new Error("invalid WebSdk version requested");
        }
      }
      return WebChannelOptions;
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("WebSdkCore.channelClientImplementation", [
          "async",
          "sjcl",
          "BigInteger",
          "SRPClient",
          "WebSdkCore",
          "WebSdkCore.utils",
          "WebSdkCore.configurator",
          "WebSdkCore.cipher"
        ], factory);
      } else {
        var core = window.WebSdkCore;
        if (!core)
          throw new Error("WebSdkCore is not loaded.");
        window.WebSdkCore.channelClientImplementation = factory(async, sjcl, BigInteger, SRPClient, core, core.utils, core.configurator, core.cipher);
      }
    })(function(async2, sjcl2, BigInteger2, SRPClient2, core, utils, configurator, cipher) {
      function WebChannelClientImpl(clientPath) {
        if (!clientPath)
          throw new Error("clientPath cannot be empty");
        core.log("WebSdkVersion: ", core.WebSdk.version, "clientPath: ", clientPath);
        this.clientPath = clientPath;
        this.wsThreshold = 10240;
        this.wsQueueInterval = 1e3;
        this.wsQueueLimit = 100;
        this.wsReconnectInterval = 5e3;
        this.queue = new utils.FixedQueue(this.wsQueueLimit);
        this.queueInterval = null;
        this.webSocket = null;
        this.sessionKey = null;
        this.M1 = null;
        this.reconnectTimer = null;
        this.onConnectionFailed = null;
        this.onConnectionSucceed = null;
        this.onDataReceivedBin = null;
        this.onDataReceivedTxt = null;
        var self2 = this;
        try {
          window.parent.parent.addEventListener("blur", function() {
            self2.resetReconnectTimer();
            self2.notifyFocusChanged(false);
          });
          window.parent.parent.addEventListener("focus", function() {
            self2.notifyFocusChanged(true);
          });
        } catch (err) {
        }
      }
      WebChannelClientImpl.prototype.notifyFocusChanged = function(isFocused) {
        if (!this.isConnected()) return;
        core.log("WebChannelClientImpl: notifyFocusChanged ->", isFocused);
        var data = {
          type: "sdk.focusChanged",
          data: isFocused
        };
        this.sendData(JSON.stringify(data));
      };
      WebChannelClientImpl.prototype.fireConnectionFailed = function() {
        this.setReconnectTimer();
        if (this.onConnectionFailed) {
          this.onConnectionFailed();
        }
      };
      WebChannelClientImpl.prototype.fireConnectionSucceed = function() {
        if (this.onConnectionSucceed) {
          this.onConnectionSucceed();
        }
      };
      WebChannelClientImpl.prototype.resetReconnectTimer = function() {
        if (this.reconnectTimer) {
          clearInterval(this.reconnectTimer);
          this.reconnectTimer = null;
        }
      };
      WebChannelClientImpl.prototype.setReconnectTimer = function() {
        this.resetReconnectTimer();
        var self2 = this;
        this.reconnectTimer = setInterval(function() {
          self2.connectInternal(false);
        }, this.wsReconnectInterval);
      };
      WebChannelClientImpl.prototype.wsconnect = function(url) {
        core.log("WebChannelClientImpl: wsconnect " + url);
        var self2 = this;
        var $q = utils.Deferred();
        if (this.webSocket && this.webSocket.readyState !== WebSocket.CLOSED)
          throw new Error("wsdisconnect has not been called");
        this.webSocket = new WebSocket(url);
        this.webSocket.binaryType = "arraybuffer";
        this.webSocket.onclose = function(event) {
          core.log("WebChannelClientImpl: wsonclose");
          return self2.wsonclose(true);
        };
        this.webSocket.onopen = function(event) {
          core.log("WebChannelClientImpl: wsonopen");
          $q.resolve();
          try {
            if (window.parent.parent.document.hasFocus()) {
              self2.notifyFocusChanged(true);
            } else {
              self2.notifyFocusChanged(false);
            }
          } catch (err) {
            self2.notifyFocusChanged(true);
          }
        };
        this.webSocket.onerror = function(event) {
          core.log("WebChannelClientImpl: wsonerror " + arguments);
          return $q.reject(new Error("WebSocket connection failed."));
        };
        this.webSocket.onmessage = function(event) {
          return self2.wsonmessage(event);
        };
        return $q.promise;
      };
      WebChannelClientImpl.prototype.wsdisconnect = function() {
        var self2 = this;
        var $q = utils.Deferred();
        if (!this.webSocket || this.webSocket.readyState !== WebSocket.OPEN) {
          $q.resolve();
        } else {
          this.webSocket.onclose = function(event) {
            self2.wsonclose(false);
            $q.resolve();
          };
          this.webSocket.close();
        }
        return $q.promise;
      };
      WebChannelClientImpl.prototype.wsonclose = function(isFailed) {
        core.log("WebChannelClientImpl: connection closed");
        this.webSocket.onclose = null;
        this.webSocket.onopen = null;
        this.webSocket.onmessage = null;
        this.webSocket.onerror = null;
        this.deactivateBufferCheck();
        if (isFailed) {
          this.fireConnectionFailed();
        }
      };
      WebChannelClientImpl.prototype.wsonmessage = function(event) {
        var self2 = this;
        cipher.decode(this.sessionKey, this.M1, event.data).then(function(data) {
          if (typeof data === "string") {
            if (self2.onDataReceivedTxt) {
              self2.onDataReceivedTxt(data);
            }
          } else {
            if (self2.onDataReceivedBin) {
              self2.onDataReceivedBin(data);
            }
          }
        });
      };
      WebChannelClientImpl.prototype.wssend = function(data) {
        if (!this.isConnected())
          return false;
        if (this.webSocket.bufferedAmount >= this.wsThreshold) {
          this.activateBufferCheck();
          return false;
        }
        this.webSocket.send(data);
        return true;
      };
      WebChannelClientImpl.prototype.generateSessionKey = function(callback) {
        var srpData = configurator.srp;
        if (!srpData.p1 || !srpData.p2 || !srpData.salt)
          return callback(new Error("No data available for authentication"));
        var self2 = this;
        var srp = new SRPClient2(srpData.p1, srpData.p2);
        var a2;
        do {
          a2 = srp.srpRandom();
        } while (!srp.canCalculateA(a2));
        var A = srp.calculateA(a2);
        if (core.WebSdk.version >= core.WebSdkEncryptionSupport.AESEncryption && !cipher.isCryptoSupported())
          core.WebSdk.version = core.WebSdkEncryptionSupport.Encryption;
        utils.ajax("post", configurator.url + "/connect", {
          username: srpData.p1,
          A: srp.toHexString(A),
          version: core.WebSdk.version.toString()
        }).then(function(response) {
          if (response.version === void 0)
            core.WebSdk.version = Math.min(core.WebSdk.version, core.WebSdkEncryptionSupport.Encryption);
          else core.WebSdk.version = response.version;
          var B = new BigInteger2(response.B, 16), u = srp.calculateU(A, B), S = srp.calculateS(B, srpData.salt, u, a2), K = srp.calculateK(S), M1 = srp.calculateM(A, B, K, srpData.salt);
          self2.sessionKey = cipher.hexToBytes(sjcl2.codec.hex.fromBits(sjcl2.hash.sha256.hash(sjcl2.codec.hex.toBits(K))));
          self2.M1 = M1;
          callback(null, M1);
        }).catch(callback);
      };
      WebChannelClientImpl.prototype.setupSecureChannel = function(callback) {
        core.log("WebChannelClientImpl.setupSecureChannel");
        var self2 = this;
        async2.waterfall([
          function(callback2) {
            self2.generateSessionKey(callback2);
          },
          function(sessionKey, callback2) {
            var connectionUrl = configurator.url.replace("http", "ws") + "/" + self2.clientPath + "?username=" + configurator.srp.p1 + "&M1=" + self2.M1;
            if (!configurator.sessionId) {
              configurator.sessionId = sjcl2.codec.hex.fromBits(sjcl2.random.randomWords(2, 0));
            }
            connectionUrl += "&sessionId=" + configurator.sessionId;
            connectionUrl += "&version=" + core.WebSdk.version.toString();
            self2.wsconnect(connectionUrl).then(function() {
              callback2(null);
            }).catch(function(err) {
              core.log(err);
              callback2(err);
            });
          }
        ], callback);
      };
      WebChannelClientImpl.prototype.isConnected = function() {
        return !!this.webSocket && this.webSocket.readyState === WebSocket.OPEN;
      };
      WebChannelClientImpl.prototype.sendData = function(data) {
        if (!this.wssend(data)) {
          this.queue.push(data);
        }
      };
      WebChannelClientImpl.prototype.deactivateBufferCheck = function() {
        if (!this.queueInterval) return;
        clearInterval(this.queueInterval);
        this.queueInterval = null;
      };
      WebChannelClientImpl.prototype.activateBufferCheck = function() {
        if (this.queueInterval) return;
        var self2 = this;
        this.queueInterval = setInterval(function() {
          self2.processMessageQueue();
          if (self2.queue.length === 0) {
            self2.deactivateBufferCheck();
          }
        }, this.wsQueueInterval);
      };
      WebChannelClientImpl.prototype.processMessageQueue = function() {
        core.log("WebChannelClientImpl: processMessageQueue " + this.queue.length);
        if (this.queue.length === 0)
          return;
        for (var i = 0; i < this.queue.length; ) {
          if (!this.wssend(this.queue.items[i])) break;
          this.queue.splice(i, 1);
        }
      };
      WebChannelClientImpl.prototype.connectInternal = function(multipleAttempts) {
        core.log("WebChannelClientImpl.connectInternal");
        this.resetReconnectTimer();
        var self2 = this;
        async2.waterfall([
          function(callback) {
            configurator.ensureLoaded(callback);
          },
          function(callback) {
            async2.retry(multipleAttempts ? 3 : 1, function() {
              self2.setupSecureChannel(callback);
            }, callback);
          }
        ], function(err) {
          if (err) return self2.fireConnectionFailed();
          self2.fireConnectionSucceed();
          self2.processMessageQueue();
        });
      };
      WebChannelClientImpl.prototype.connect = function() {
        this.connectInternal(true);
      };
      WebChannelClientImpl.prototype.disconnect = function() {
        this.wsdisconnect();
      };
      WebChannelClientImpl.prototype.sendDataBin = function(data) {
        var self2 = this;
        cipher.encode(this.sessionKey, this.M1, data).then(function(data2) {
          self2.sendData(data2);
        });
      };
      WebChannelClientImpl.prototype.sendDataTxt = function(data) {
        var self2 = this;
        cipher.encode(this.sessionKey, this.M1, data).then(function(data2) {
          self2.sendData(data2);
        });
      };
      return WebChannelClientImpl;
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("WebSdkCore.channelClient", [
          "WebSdkCore",
          "WebSdkCore.channelOptions",
          "WebSdkCore.channelClientImplementation"
        ], factory);
      } else {
        var core = window.WebSdkCore;
        if (!core)
          throw new Error("WebSdkCore is not loaded.");
        window.WebSdkCore.channelClient = factory(core, core.channelOptions, core.channelClientImplementation);
      }
    })(function(core, WebChannelOptions, WebChannelClientImpl) {
      function WebChannelClient(clientPath, options) {
        if (options) {
          core.log(options);
          var webChannelOptions = new WebChannelOptions(options);
          core.WebSdk.debug = webChannelOptions.debug;
          core.WebSdk.version = webChannelOptions.version;
        }
        var client = new WebChannelClientImpl(clientPath);
        Object.defineProperties(this, {
          "path": {
            get: function() {
              return clientPath;
            },
            enumerable: true
          },
          "onConnectionFailed": {
            get: function() {
              return client.onConnectionFailed;
            },
            set: function(value2) {
              client.onConnectionFailed = value2;
            },
            enumerable: true
          },
          "onConnectionSucceed": {
            get: function() {
              return client.onConnectionSucceed;
            },
            set: function(value2) {
              client.onConnectionSucceed = value2;
            },
            enumerable: true
          },
          "onDataReceivedBin": {
            get: function() {
              return client.onDataReceivedBin;
            },
            set: function(value2) {
              client.onDataReceivedBin = value2;
            },
            enumerable: true
          },
          "onDataReceivedTxt": {
            get: function() {
              return client.onDataReceivedTxt;
            },
            set: function(value2) {
              client.onDataReceivedTxt = value2;
            },
            enumerable: true
          }
        });
        this.connect = function() {
          client.connect();
        };
        this.disconnect = function() {
          client.disconnect();
        };
        this.isConnected = function() {
          return client.isConnected();
        };
        this.sendDataBin = function(data) {
          client.sendDataBin(data);
        };
        this.sendDataTxt = function(data) {
          client.sendDataTxt(data);
        };
        this.resetReconnectTimer = function() {
          client.resetReconnectTimer();
        };
      }
      return WebChannelClient;
    });
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("WebSdk", [
          "WebSdkCore",
          "WebSdkCore.channelOptions",
          "WebSdkCore.channelClient",
          "ifvisible"
        ], factory);
      } else {
        var core = window.WebSdkCore;
        if (!core)
          throw new Error("WebSdkCore is not loaded.");
        window.WebSdk = factory(core, core.channelOptions, core.channelClient, ifvisible);
      }
    })(function(core, WebChannelOptions, WebChannelClient, ifvisible2) {
      core.log("loaded websdk.client.ui");
      core.visibilityApi = ifvisible2;
      return {
        WebChannelOptions,
        WebChannelClient
      };
    });
  }
});

// node_modules/@digitalpersona/devices/node_modules/tslib/tslib.es6.js
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

// node_modules/@digitalpersona/devices/dist/es5/common/events.js
var Event = (
  /** @class */
  /* @__PURE__ */ (function() {
    function Event2(type) {
      this.type = type;
    }
    return Event2;
  })()
);
var CommunicationFailed = (
  /** @class */
  (function(_super) {
    __extends(CommunicationFailed2, _super);
    function CommunicationFailed2() {
      return _super.call(this, "CommunicationFailed") || this;
    }
    return CommunicationFailed2;
  })(Event)
);

// node_modules/@digitalpersona/devices/dist/es5/devices/events.js
var DeviceEvent = (
  /** @class */
  (function(_super) {
    __extends(DeviceEvent2, _super);
    function DeviceEvent2(type, deviceId) {
      var _this = _super.call(this, type) || this;
      _this.deviceId = deviceId;
      return _this;
    }
    return DeviceEvent2;
  })(Event)
);
var DeviceConnected = (
  /** @class */
  (function(_super) {
    __extends(DeviceConnected2, _super);
    function DeviceConnected2(deviceId) {
      return _super.call(this, "DeviceConnected", deviceId) || this;
    }
    return DeviceConnected2;
  })(DeviceEvent)
);
var DeviceDisconnected = (
  /** @class */
  (function(_super) {
    __extends(DeviceDisconnected2, _super);
    function DeviceDisconnected2(deviceId) {
      return _super.call(this, "DeviceDisconnected", deviceId) || this;
    }
    return DeviceDisconnected2;
  })(DeviceEvent)
);

// node_modules/@digitalpersona/devices/dist/es5/devices/cards/cards.js
var CardType;
(function(CardType2) {
  CardType2[CardType2["Contact"] = 1] = "Contact";
  CardType2[CardType2["Contactless"] = 2] = "Contactless";
  CardType2[CardType2["Proximity"] = 4] = "Proximity";
})(CardType || (CardType = {}));
var CardAttributes;
(function(CardAttributes2) {
  CardAttributes2[CardAttributes2["SupportsPIN"] = 1] = "SupportsPIN";
  CardAttributes2[CardAttributes2["SupportsUID"] = 2] = "SupportsUID";
  CardAttributes2[CardAttributes2["IsPKI"] = 65536] = "IsPKI";
  CardAttributes2[CardAttributes2["IsPIV"] = 131072] = "IsPIV";
  CardAttributes2[CardAttributes2["IsReadOnly"] = 2147483648] = "IsReadOnly";
})(CardAttributes || (CardAttributes = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/cards/events.js
var CardInserted = (
  /** @class */
  (function(_super) {
    __extends(CardInserted2, _super);
    function CardInserted2(reader, card) {
      var _this = _super.call(this, "CardInserted", reader) || this;
      _this.cardId = card;
      return _this;
    }
    return CardInserted2;
  })(DeviceEvent)
);
var CardRemoved = (
  /** @class */
  (function(_super) {
    __extends(CardRemoved2, _super);
    function CardRemoved2(reader, card) {
      var _this = _super.call(this, "CardRemoved", reader) || this;
      _this.cardId = card;
      return _this;
    }
    return CardRemoved2;
  })(DeviceEvent)
);

// node_modules/@digitalpersona/devices/dist/es5/private/eventSource.js
var MultiCastEventSource = (
  /** @class */
  (function() {
    function MultiCastEventSource2() {
      this.handlers = {};
    }
    MultiCastEventSource2.prototype._on = function(event, handler) {
      this.handlers[event] = this.handlers[event] || [];
      this.handlers[event].push(handler);
      return handler;
    };
    MultiCastEventSource2.prototype._off = function(event, handler) {
      if (event) {
        var hh = this.handlers[event];
        if (hh) {
          if (handler)
            this.handlers[event] = hh.filter(function(h) {
              return h !== handler;
            });
          else
            delete this.handlers[event];
        }
      } else
        this.handlers = {};
      return this;
    };
    MultiCastEventSource2.prototype.emit = function(event) {
      var _this = this;
      if (!event)
        return;
      var eventName = event.type;
      var unicast = this["on" + eventName];
      if (unicast)
        this.invoke(unicast, event);
      var multicast = this.handlers[eventName];
      if (multicast)
        multicast.forEach(function(h) {
          return _this.invoke(h, event);
        });
    };
    MultiCastEventSource2.prototype.invoke = function(handler, event) {
      try {
        handler(event);
      } catch (e) {
        console.error(e);
      }
    };
    return MultiCastEventSource2;
  })()
);

// node_modules/@digitalpersona/devices/dist/es5/devices/websdk/channel.js
var import_core = __toESM(require_index_umd());

// node_modules/@digitalpersona/devices/dist/es5/devices/websdk/messages.js
var MessageType;
(function(MessageType3) {
  MessageType3[MessageType3["Response"] = 0] = "Response";
  MessageType3[MessageType3["Notification"] = 1] = "Notification";
})(MessageType || (MessageType = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/websdk/channel.js
var import_WebSdk = __toESM(require_WebSdk());
var Channel = (
  /** @class */
  (function() {
    function Channel2(channelName, options) {
      this.pending = [];
      this.webChannel = new WebSdk.WebChannelClient(channelName, options);
      this.webChannel.onConnectionSucceed = this.onConnectionSucceed.bind(this);
      this.webChannel.onConnectionFailed = this.onConnectionFailed.bind(this);
      this.webChannel.onDataReceivedTxt = this.onDataReceivedTxt.bind(this);
    }
    Channel2.prototype.send = function(request, timeout) {
      var deferred = new Promise(function(resolve, reject) {
        request.resolve = resolve;
        request.reject = reject;
        if (timeout) {
          request.timer = window.setTimeout(function() {
            if (request.timer)
              try {
                request.reject(new Error("Timeout"));
              } catch (e) {
              }
          }, timeout);
        }
      });
      this.pending.push(request);
      if (this.webChannel.isConnected())
        this.processRequestQueue();
      else
        this.webChannel.connect();
      return deferred;
    };
    Channel2.prototype.onConnectionSucceed = function() {
      this.processRequestQueue();
    };
    Channel2.prototype.onConnectionFailed = function() {
      this.pending.forEach(function(r) {
        return r.reject(new Error("Communication failure."));
      });
      this.pending = [];
      if (this.onCommunicationError)
        try {
          this.onCommunicationError();
        } catch (e) {
        }
    };
    Channel2.prototype.onDataReceivedTxt = function(data) {
      var message = JSON.parse(import_core.Utf8.fromBase64Url(data));
      if (message.Type === MessageType.Response) {
        var response = JSON.parse(import_core.Utf8.fromBase64Url(message.Data || ""));
        var request = this.findRequest(response);
        if (request !== null) {
          if (request.timer) {
            window.clearTimeout(request.timer);
            delete request.timer;
          }
          var hr = response.Result >>> 0;
          if (hr > 2147483647)
            request.reject(new Error("0x" + hr.toString(16)));
          else
            request.resolve(response);
        } else
          console.log("Orphaned response: " + message.Type);
      } else if (message.Type === MessageType.Notification) {
        var notification = JSON.parse(import_core.Utf8.fromBase64Url(message.Data || ""));
        if (this.onNotification)
          try {
            this.onNotification(notification);
          } catch (e) {
          }
      } else
        console.log("Unknown message type: " + message.Type);
    };
    Channel2.prototype.processRequestQueue = function() {
      var _this = this;
      this.pending.forEach(function(req, i, items) {
        if (!req.sent) {
          _this.webChannel.sendDataTxt(import_core.Base64Url.fromJSON(req.command));
          items[i].sent = true;
        }
      });
    };
    Channel2.prototype.findRequest = function(response) {
      for (var i = 0; i < this.pending.length; i++) {
        var request = this.pending[i];
        if (request.sent && request.command.Method === response.Method) {
          this.pending.splice(i, 1);
          return request;
        }
      }
      return null;
    };
    return Channel2;
  })()
);

// node_modules/@digitalpersona/devices/dist/es5/devices/websdk/command.js
var Command = (
  /** @class */
  /* @__PURE__ */ (function() {
    function Command2(method, parameters) {
      this.Method = method;
      this.Parameters = parameters;
    }
    return Command2;
  })()
);
var Request = (
  /** @class */
  /* @__PURE__ */ (function() {
    function Request2(command) {
      this.command = command;
      this.sent = false;
    }
    return Request2;
  })()
);

// node_modules/@digitalpersona/devices/dist/es5/devices/cards/messages.js
var Method;
(function(Method4) {
  Method4[Method4["EnumerateReaders"] = 1] = "EnumerateReaders";
  Method4[Method4["EnumerateCards"] = 2] = "EnumerateCards";
  Method4[Method4["GetCardInfo"] = 3] = "GetCardInfo";
  Method4[Method4["GetCardUID"] = 4] = "GetCardUID";
  Method4[Method4["GetDPCardAuthData"] = 5] = "GetDPCardAuthData";
  Method4[Method4["GetDPCardEnrollData"] = 6] = "GetDPCardEnrollData";
  Method4[Method4["Subscribe"] = 100] = "Subscribe";
  Method4[Method4["Unsubscribe"] = 101] = "Unsubscribe";
})(Method || (Method = {}));
var NotificationType;
(function(NotificationType3) {
  NotificationType3[NotificationType3["ReaderConnected"] = 1] = "ReaderConnected";
  NotificationType3[NotificationType3["ReaderDisconnected"] = 2] = "ReaderDisconnected";
  NotificationType3[NotificationType3["CardInserted"] = 3] = "CardInserted";
  NotificationType3[NotificationType3["CardRemoved"] = 4] = "CardRemoved";
})(NotificationType || (NotificationType = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/cards/reader.js
var import_core2 = __toESM(require_index_umd());
var CardsReader = (
  /** @class */
  (function(_super) {
    __extends(CardsReader2, _super);
    function CardsReader2(options) {
      var _this = _super.call(this) || this;
      _this.channel = new Channel("smartcards", options);
      _this.channel.onCommunicationError = _this.onConnectionFailed.bind(_this);
      _this.channel.onNotification = _this.processNotification.bind(_this);
      return _this;
    }
    CardsReader2.prototype.on = function(event, handler) {
      return this._on(event, handler);
    };
    CardsReader2.prototype.off = function(event, handler) {
      return this._off(event, handler);
    };
    CardsReader2.prototype.enumerateReaders = function() {
      return this.channel.send(new Request(new Command(Method.EnumerateReaders))).then(function(response) {
        var list = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || "{}"));
        return JSON.parse(list.Readers || "[]");
      });
    };
    CardsReader2.prototype.enumerateCards = function() {
      return this.channel.send(new Request(new Command(Method.EnumerateCards))).then(function(response) {
        var list = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || "{}"));
        var cards = JSON.parse(list.Cards || "[]");
        return cards.map(function(s) {
          return JSON.parse(import_core2.Utf16.fromBase64Url(s));
        });
      });
    };
    CardsReader2.prototype.getCardInfo = function(reader) {
      return this.channel.send(new Request(new Command(Method.GetCardInfo, import_core2.Base64Url.fromJSON({ Reader: reader })))).then(function(response) {
        var cardInfo = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || "null"));
        return cardInfo;
      });
    };
    CardsReader2.prototype.getCardUid = function(reader) {
      return this.channel.send(new Request(new Command(Method.GetCardUID, import_core2.Base64Url.fromJSON({ Reader: reader })))).then(function(response) {
        var data = import_core2.Base64.fromBase64Url(response.Data || "");
        return data;
      });
    };
    CardsReader2.prototype.getCardAuthData = function(reader, pin) {
      return this.channel.send(new Request(new Command(Method.GetDPCardAuthData, import_core2.Base64Url.fromJSON({ Reader: reader, PIN: pin || "" })))).then(function(response) {
        var data = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || ""));
        return data;
      });
    };
    CardsReader2.prototype.getCardEnrollData = function(reader, pin) {
      return this.channel.send(new Request(new Command(Method.GetDPCardEnrollData, import_core2.Base64Url.fromJSON({ Reader: reader, PIN: pin || "" })))).then(function(response) {
        var data = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || ""));
        return data;
      });
    };
    CardsReader2.prototype.subscribe = function(reader) {
      return this.channel.send(new Request(new Command(Method.Subscribe, reader ? import_core2.Base64Url.fromJSON({ Reader: reader }) : ""))).then();
    };
    CardsReader2.prototype.unsubscribe = function(reader) {
      return this.channel.send(new Request(new Command(Method.Unsubscribe, reader ? import_core2.Base64Url.fromJSON({ Reader: reader }) : ""))).then();
    };
    CardsReader2.prototype.onConnectionFailed = function() {
      this.emit(new CommunicationFailed());
    };
    CardsReader2.prototype.processNotification = function(notification) {
      switch (notification.Event) {
        case NotificationType.ReaderConnected:
          return this.emit(new DeviceConnected(notification.Reader));
        case NotificationType.ReaderDisconnected:
          return this.emit(new DeviceDisconnected(notification.Reader));
        case NotificationType.CardInserted:
          return this.emit(new CardInserted(notification.Reader, notification.Card));
        case NotificationType.CardRemoved:
          return this.emit(new CardRemoved(notification.Reader, notification.Card));
        default:
          console.log("Unknown notification: " + notification.Event);
      }
    };
    return CardsReader2;
  })(
    MultiCastEventSource
    //    implements CommunicationEventSource, DeviceEventSource, CardsEventSource
  )
);

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/device.js
var DeviceUidType;
(function(DeviceUidType2) {
  DeviceUidType2[DeviceUidType2["Persistent"] = 0] = "Persistent";
  DeviceUidType2[DeviceUidType2["Volatile"] = 1] = "Volatile";
})(DeviceUidType || (DeviceUidType = {}));
var DeviceModality;
(function(DeviceModality2) {
  DeviceModality2[DeviceModality2["Unknown"] = 0] = "Unknown";
  DeviceModality2[DeviceModality2["Swipe"] = 1] = "Swipe";
  DeviceModality2[DeviceModality2["Area"] = 2] = "Area";
  DeviceModality2[DeviceModality2["AreaMultifinger"] = 3] = "AreaMultifinger";
})(DeviceModality || (DeviceModality = {}));
var DeviceTechnology;
(function(DeviceTechnology2) {
  DeviceTechnology2[DeviceTechnology2["Unknown"] = 0] = "Unknown";
  DeviceTechnology2[DeviceTechnology2["Optical"] = 1] = "Optical";
  DeviceTechnology2[DeviceTechnology2["Capacitive"] = 2] = "Capacitive";
  DeviceTechnology2[DeviceTechnology2["Thermal"] = 3] = "Thermal";
  DeviceTechnology2[DeviceTechnology2["Pressure"] = 4] = "Pressure";
})(DeviceTechnology || (DeviceTechnology = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/sample.js
var SampleFormat;
(function(SampleFormat2) {
  SampleFormat2[SampleFormat2["Raw"] = 1] = "Raw";
  SampleFormat2[SampleFormat2["Intermediate"] = 2] = "Intermediate";
  SampleFormat2[SampleFormat2["Compressed"] = 3] = "Compressed";
  SampleFormat2[SampleFormat2["PngImage"] = 5] = "PngImage";
})(SampleFormat || (SampleFormat = {}));
var QualityCode;
(function(QualityCode2) {
  QualityCode2[QualityCode2["Good"] = 0] = "Good";
  QualityCode2[QualityCode2["NoImage"] = 1] = "NoImage";
  QualityCode2[QualityCode2["TooLight"] = 2] = "TooLight";
  QualityCode2[QualityCode2["TooDark"] = 3] = "TooDark";
  QualityCode2[QualityCode2["TooNoisy"] = 4] = "TooNoisy";
  QualityCode2[QualityCode2["LowContrast"] = 5] = "LowContrast";
  QualityCode2[QualityCode2["NotEnoughFeatures"] = 6] = "NotEnoughFeatures";
  QualityCode2[QualityCode2["NotCentered"] = 7] = "NotCentered";
  QualityCode2[QualityCode2["NotAFinger"] = 8] = "NotAFinger";
  QualityCode2[QualityCode2["TooHigh"] = 9] = "TooHigh";
  QualityCode2[QualityCode2["TooLow"] = 10] = "TooLow";
  QualityCode2[QualityCode2["TooLeft"] = 11] = "TooLeft";
  QualityCode2[QualityCode2["TooRight"] = 12] = "TooRight";
  QualityCode2[QualityCode2["TooStrange"] = 13] = "TooStrange";
  QualityCode2[QualityCode2["TooFast"] = 14] = "TooFast";
  QualityCode2[QualityCode2["TooSkewed"] = 15] = "TooSkewed";
  QualityCode2[QualityCode2["TooShort"] = 16] = "TooShort";
  QualityCode2[QualityCode2["TooSlow"] = 17] = "TooSlow";
  QualityCode2[QualityCode2["ReverseMotion"] = 18] = "ReverseMotion";
  QualityCode2[QualityCode2["PressureTooHard"] = 19] = "PressureTooHard";
  QualityCode2[QualityCode2["PressureTooLight"] = 20] = "PressureTooLight";
  QualityCode2[QualityCode2["WetFinger"] = 21] = "WetFinger";
  QualityCode2[QualityCode2["FakeFinger"] = 22] = "FakeFinger";
  QualityCode2[QualityCode2["TooSmall"] = 23] = "TooSmall";
  QualityCode2[QualityCode2["RotatedTooMuch"] = 24] = "RotatedTooMuch";
})(QualityCode || (QualityCode = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/events.js
var SamplesAcquired = (
  /** @class */
  (function(_super) {
    __extends(SamplesAcquired2, _super);
    function SamplesAcquired2(deviceUid, sampleFormat, sampleData) {
      var _this = _super.call(this, "SamplesAcquired", deviceUid) || this;
      _this.sampleFormat = sampleFormat;
      _this.samples = JSON.parse(sampleData);
      return _this;
    }
    return SamplesAcquired2;
  })(DeviceEvent)
);
var QualityReported = (
  /** @class */
  (function(_super) {
    __extends(QualityReported2, _super);
    function QualityReported2(deviceUid, quality) {
      var _this = _super.call(this, "QualityReported", deviceUid) || this;
      _this.quality = quality;
      return _this;
    }
    return QualityReported2;
  })(DeviceEvent)
);
var ErrorOccurred = (
  /** @class */
  (function(_super) {
    __extends(ErrorOccurred2, _super);
    function ErrorOccurred2(deviceUid, error) {
      var _this = _super.call(this, "ErrorOccurred", deviceUid) || this;
      _this.error = error;
      return _this;
    }
    return ErrorOccurred2;
  })(DeviceEvent)
);
var AcquisitionStarted = (
  /** @class */
  (function(_super) {
    __extends(AcquisitionStarted2, _super);
    function AcquisitionStarted2(deviceUid) {
      return _super.call(this, "AcquisitionStarted", deviceUid) || this;
    }
    return AcquisitionStarted2;
  })(DeviceEvent)
);
var AcquisitionStopped = (
  /** @class */
  (function(_super) {
    __extends(AcquisitionStopped2, _super);
    function AcquisitionStopped2(deviceUid) {
      return _super.call(this, "AcquisitionStopped", deviceUid) || this;
    }
    return AcquisitionStopped2;
  })(DeviceEvent)
);

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/reader.js
var import_core3 = __toESM(require_index_umd());

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/messages.js
var Method2;
(function(Method4) {
  Method4[Method4["EnumerateDevices"] = 1] = "EnumerateDevices";
  Method4[Method4["GetDeviceInfo"] = 2] = "GetDeviceInfo";
  Method4[Method4["StartAcquisition"] = 3] = "StartAcquisition";
  Method4[Method4["StopAcquisition"] = 4] = "StopAcquisition";
})(Method2 || (Method2 = {}));
var NotificationType2;
(function(NotificationType3) {
  NotificationType3[NotificationType3["Completed"] = 0] = "Completed";
  NotificationType3[NotificationType3["Error"] = 1] = "Error";
  NotificationType3[NotificationType3["Disconnected"] = 2] = "Disconnected";
  NotificationType3[NotificationType3["Connected"] = 3] = "Connected";
  NotificationType3[NotificationType3["Quality"] = 4] = "Quality";
  NotificationType3[NotificationType3["Stopped"] = 10] = "Stopped";
  NotificationType3[NotificationType3["Started"] = 11] = "Started";
})(NotificationType2 || (NotificationType2 = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/reader.js
var FingerprintReader = (
  /** @class */
  (function(_super) {
    __extends(FingerprintReader2, _super);
    function FingerprintReader2(options) {
      var _this = _super.call(this) || this;
      _this.options = options;
      _this.channel = new Channel("fingerprints", _this.options);
      _this.channel.onCommunicationError = _this.onConnectionFailed.bind(_this);
      _this.channel.onNotification = _this.processNotification.bind(_this);
      return _this;
    }
    FingerprintReader2.prototype.on = function(event, handler) {
      return this._on(event, handler);
    };
    FingerprintReader2.prototype.off = function(event, handler) {
      return this._off(event, handler);
    };
    FingerprintReader2.prototype.enumerateDevices = function() {
      return this.channel.send(new Request(new Command(Method2.EnumerateDevices))).then(function(response) {
        if (!response)
          return [];
        var deviceList = JSON.parse(import_core3.Utf8.fromBase64Url(response.Data || "{}"));
        return JSON.parse(deviceList.DeviceIDs || "[]");
      });
    };
    FingerprintReader2.prototype.getDeviceInfo = function(deviceUid) {
      return this.channel.send(new Request(new Command(Method2.GetDeviceInfo, import_core3.Base64Url.fromJSON({ DeviceID: deviceUid })))).then(function(response) {
        var deviceInfo = JSON.parse(import_core3.Utf8.fromBase64Url(response.Data || "null"));
        return deviceInfo;
      });
    };
    FingerprintReader2.prototype.startAcquisition = function(sampleFormat, deviceUid) {
      return this.channel.send(new Request(new Command(Method2.StartAcquisition, import_core3.Base64Url.fromJSON({
        DeviceID: deviceUid ? deviceUid : "00000000-0000-0000-0000-000000000000",
        SampleType: sampleFormat
      })))).then();
    };
    FingerprintReader2.prototype.stopAcquisition = function(deviceUid) {
      return this.channel.send(new Request(new Command(Method2.StopAcquisition, import_core3.Base64Url.fromJSON({
        DeviceID: deviceUid ? deviceUid : "00000000-0000-0000-0000-000000000000"
      })))).then();
    };
    FingerprintReader2.prototype.onConnectionFailed = function() {
      this.emit(new CommunicationFailed());
    };
    FingerprintReader2.prototype.processNotification = function(notification) {
      switch (notification.Event) {
        case NotificationType2.Completed:
          var completed = JSON.parse(import_core3.Utf8.fromBase64Url(notification.Data || ""));
          return this.emit(new SamplesAcquired(notification.Device, completed.SampleFormat, completed.Samples));
        case NotificationType2.Error:
          var error = JSON.parse(import_core3.Utf8.fromBase64Url(notification.Data || ""));
          return this.emit(new ErrorOccurred(notification.Device, error.uError));
        case NotificationType2.Disconnected:
          return this.emit(new DeviceDisconnected(notification.Device));
        case NotificationType2.Connected:
          return this.emit(new DeviceConnected(notification.Device));
        case NotificationType2.Quality:
          var quality = JSON.parse(import_core3.Utf8.fromBase64Url(notification.Data || ""));
          return this.emit(new QualityReported(notification.Device, quality.Quality));
        case NotificationType2.Stopped:
          return this.emit(new AcquisitionStopped(notification.Device));
        case NotificationType2.Started:
          return this.emit(new AcquisitionStarted(notification.Device));
        default:
          console.log("Unknown notification: " + notification.Event);
      }
    };
    return FingerprintReader2;
  })(
    MultiCastEventSource
    //    implements FingerprintsEventSource, DeviceEventSource, CommunicationEventSource
  )
);

// node_modules/@digitalpersona/devices/dist/es5/devices/iwa/messages.js
var Method3;
(function(Method4) {
  Method4[Method4["Init"] = 1] = "Init";
  Method4[Method4["Continue"] = 2] = "Continue";
  Method4[Method4["Term"] = 3] = "Term";
  Method4[Method4["Authenticate"] = 4] = "Authenticate";
})(Method3 || (Method3 = {}));
var MessageType2;
(function(MessageType3) {
  MessageType3[MessageType3["Response"] = 0] = "Response";
  MessageType3[MessageType3["Notification"] = 1] = "Notification";
})(MessageType2 || (MessageType2 = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/iwa/device.js
var WindowsAuthClient = (
  /** @class */
  (function(_super) {
    __extends(WindowsAuthClient2, _super);
    function WindowsAuthClient2(options) {
      var _this = _super.call(this) || this;
      _this.channel = new Channel("wia", options);
      _this.channel.onCommunicationError = _this.onConnectionFailed.bind(_this);
      return _this;
    }
    WindowsAuthClient2.prototype.on = function(event, handler) {
      return this._on(event, handler);
    };
    WindowsAuthClient2.prototype.off = function(event, handler) {
      return this._off(event, handler);
    };
    WindowsAuthClient2.prototype.init = function() {
      return this.channel.send(new Request(new Command(Method3.Init)), 3e3).then(function(response) {
        var data = JSON.parse(response.Data || "{}");
        return { handle: data.Handle, data: data.Data };
      });
    };
    WindowsAuthClient2.prototype.continue = function(handle, data) {
      return this.channel.send(new Request(new Command(Method3.Continue, JSON.stringify({ Handle: handle, Data: data })))).then(function(response) {
        var d = JSON.parse(response.Data || "{}");
        return d.Data;
      });
    };
    WindowsAuthClient2.prototype.term = function(handle) {
      return this.channel.send(new Request(new Command(Method3.Term, JSON.stringify({ Handle: handle })))).then();
    };
    WindowsAuthClient2.prototype.onConnectionFailed = function() {
      this.emit(new CommunicationFailed());
    };
    return WindowsAuthClient2;
  })(MultiCastEventSource)
);
export {
  AcquisitionStarted,
  AcquisitionStopped,
  CardAttributes,
  CardInserted,
  CardRemoved,
  CardType,
  CardsReader,
  CommunicationFailed,
  DeviceConnected,
  DeviceDisconnected,
  DeviceEvent,
  DeviceModality,
  DeviceTechnology,
  DeviceUidType,
  ErrorOccurred,
  Event,
  FingerprintReader,
  QualityCode,
  QualityReported,
  SampleFormat,
  SamplesAcquired,
  WindowsAuthClient
};
//# sourceMappingURL=@digitalpersona_devices.js.map
