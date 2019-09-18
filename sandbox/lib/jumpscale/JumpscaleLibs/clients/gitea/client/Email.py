# DO NOT EDIT THIS FILE. This file will be overwritten when re-running go-raml.

"""
Auto-generated class for Email
"""
from six import string_types

from . import client_support


class Email(object):
    """
    auto-generated. don't touch.
    """

    @staticmethod
    def create(**kwargs):
        """
        :type email: string_types
        :type primary: bool
        :type verified: bool
        :rtype: Email
        """

        return Email(**kwargs)

    def __init__(self, json=None, **kwargs):
        pass
        if json is None and not kwargs:
            raise j.exceptions.Value("No data or kwargs present")

        class_name = "Email"
        data = json or kwargs

        # set attributes
        data_types = [string_types]
        self.email = client_support.set_property("email", data, data_types, False, [], False, False, class_name)
        data_types = [bool]
        self.primary = client_support.set_property("primary", data, data_types, False, [], False, False, class_name)
        data_types = [bool]
        self.verified = client_support.set_property("verified", data, data_types, False, [], False, False, class_name)

    def __str__(self):
        return self.as_json(indent=4)

    def as_json(self, indent=0):
        return client_support.to_json(self, indent=indent)

    def as_dict(self):
        return client_support.to_dict(self)
