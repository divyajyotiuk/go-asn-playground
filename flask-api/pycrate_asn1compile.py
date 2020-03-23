#!/usr/bin/env python

# -*- coding: UTF-8 -*-
#/**
# * Software Name : pycrate
# * Version : 0.4
# *
# * Copyright 2017. Benoit Michau. ANSSI.
# *
# * This program is free software: you can redistribute it and/or modify
# * it under the terms of the GNU General Public License version 2 as published
# * by the Free Software Foundation.
# *
# * This program is distributed in the hope that it will be useful,
# * but WITHOUT ANY WARRANTY; without even the implied warranty of
# * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# * GNU General Public License for more details.
# *
# * You will find a copy of the terms and conditions of the GNU General Public
# * License version 2 in the "license.txt" file or
# * see http://www.gnu.org/licenses/ or write to the Free Software Foundation,
# * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301 USA
# *
# *--------------------------------------------------------
# * File Name : pycrate_asn1compile.py
# * Created : 2017-02-22
# * Authors : Benoit Michau
# *--------------------------------------------------------
#*/

import os
import sys
import argparse

from pycrate_asn1c.asnproc import compile_text, compile_spec, compile_all, \
     generate_modules, PycrateGenerator, JSONDepGraphGenerator, ASN_SPECS


# inputs:
# compile any single file
# compile all .asn or .asn1 files into a directory
#   -> take load_mod.txt into account
# compile a given spec (by shortname)
# compile all specs from asndir

# -fautotags: force AUTOMATIC TAGS behaviour for all modules
# -fextimpl: force EXTENSIBILITY IMPLIED behaviour for all modules
# -fverifwarn: force warning instead of raising during the verification stage

# output:
# destination file or directory


python_version = sys.version_info[0]


def print_specnames():
    print('%s, valid specification names:' % sys.argv[0])
    for k, v in ASN_SPECS.items():
        print('    %s (%s)' % (k, v))


def get_mod_wl(fn):
    ret = []
    try:
        fd = open(fn)
    except:
        print('unable to read %s, ignoring it')
        return ret
    else:
        try:
            for l in fd.readlines():
                if len(l) > 1 and l[0] != '#':
                    ret.append(l[:-1].strip())
        except:
            print('unable to read %s, ignoring it')
            fd.close()
            return ret
        else:
            return ret


def execute():

    ckw = {}
    try:
        ofd = open('out.py', 'w')
    except:
        print("args error: unable to create output file")
        return 0
    else:
        ofd.close()
    files = []
    files.append("test.asn1")
    txt = []
    for f in files:
        try:
            fd = open(f)
        except:
            print('%s, args error: unable to open input file %s' % (sys.argv[0], f))
            return 0
        else:
            try:
                if python_version < 3:
                    txt.append( fd.read().decode('utf-8') )
                else:
                    txt.append( fd.read() )
            except:
                print('%s, args error: unable to read input file %s' % (sys.argv[0], f))
                fd.close()
                return 0
            else:
                fd.close()
    compile_text(txt, **ckw)

    generate_modules(PycrateGenerator,'out.py')
    return 0
