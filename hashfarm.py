import hashlib
import base64
import random


def harvest(field, crop):
    hexdigest = hashlib.sha256(field + crop + field).hexdigest()
    return (1 << bin(int('1' + hexdigest), 16)[3:].find('1')) - 1


def cultivate(field, size):
    while(True):
        crop = base64.websafe_b64encode(
            ('%x' % random.getrandbits(64)).decode('hex'))
        if harvest(field, crop) >= size:
            return crop
        
