import * as semver from 'semver';
import type * as ts from 'typescript/lib/tsserverlibrary';
import _40 from './4_0';
import _44 from './4_4';
import _47 from './4_7';
import _50 from './5_0';

export function decorate(
	ts: typeof import('typescript/lib/tsserverlibrary'),
	host: ts.LanguageServiceHost,
	service: ts.LanguageService,
	rootDirectory: string
) {

	if (semver.gte(ts.version, '5.0.0')) {
		_50(ts, host, service, rootDirectory);
		return true;
	} 
	else if (semver.gte(ts.version, '4.7.0')) {
		_47(ts, host, service);
		return true;
	}
	else if (semver.gte(ts.version, '4.4.0')) {
		_44(ts, host, service);
		return true;
	}
	else if (semver.gte(ts.version, '4.0.0')) {
		_40(ts, host, service);
		return true;
	}

	return false;
}
